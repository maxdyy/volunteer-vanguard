const calculateDaysLeft = (date) => {
    const today = new Date();
    const endDate = new Date(date);
    const diffTime = Math.abs(endDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        return "Expired";
    }

    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Tomorrow";
    }
    return `${diffDays} days left`;
};

const opportunityBox = (opportunity) => `
<div class="col-xl-6">
  <div class="card mb-4 overflow-hidden shadow-sm"
    style="max-height: 224px !important;"
  >
    <div class="row g-0 overflow-hidden">
      <div class="col-6 overflow-hidden">
        <img
          class="h-100 w-100 object-cover"
          src="${opportunity?.image}"
        />
      </div>
      <div class="col-6">
        <div class="card-body">
          <h5 class="card-title">
            ${opportunity?.title}
          </h5>
          
          <h5 class="card-title">${opportunity?.location} ${
  opportunity?.isEmergency
    ? `<span class="badge bg-danger">Emergency</span>`
    : ""
}</h5>
          <div class="d-flex">
            <p class="card-text text-muted">
              <i class="bi bi-person-fill text-primary fs-4"> </i
              ><span>${opportunity?.creator}</span>
            </p>
            <p class="card-text text-muted ps-3 pt-1">
              <i class="bi bi-clock-fill text-primary fs-5"></i
              ><span> ${calculateDaysLeft(
                opportunity?.endDate
              )}</span>
            </p>
          </div>
          <p class="card-text">
            ${opportunity?.description}
          </p>
          <div class="d-flex justify-content-end">
            <a href="${
              opportunity?.href
            }" class="w-100 btn btn-primary btn-sm" href="#"
              >View Application</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const initListing = () => {
  const opportunitiesBox = document.querySelector("#opportunities-box");
  const createOpportunityBtn = document.querySelector("#create-opportunity");

  // If the user is logged in and if the user if of type NGO, show the create opportunity button
  if (
    VOLUNTEER_VANGUARD.isLoggedIn() &&
    VOLUNTEER_VANGUARD.getUser().type === "NGO"
  ) {
    createOpportunityBtn.classList.remove("d-none");
    createOpportunityBtn.classList.add("d-flex");
  }

  // Get the opportunities from the DB
  const db = VOLUNTEER_VANGUARD.getDB();
  const opportunities = db?.opportunities || [];

  // Render the opportunities
  opportunities.forEach((element) => {
    opportunitiesBox.innerHTML += opportunityBox(element);
  });
};

document.addEventListener("DOMContentLoaded", initListing);