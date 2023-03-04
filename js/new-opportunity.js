// Function to add opportunity to the DB
VOLUNTEER_VANGUARD.addOpportunity = (opportunity) => {
  const db = VOLUNTEER_VANGUARD.getDB();
  db.opportunities.push(opportunity);
  VOLUNTEER_VANGUARD.updateDB(db);
};

const initNewOpportunity = () => {
  // Check if the user is logged in and is of type "NGO"
  // if not redirect to the home page
  if (
    !VOLUNTEER_VANGUARD.isLoggedIn() ||
    VOLUNTEER_VANGUARD.getUser().type !== "NGO"
  ) {
    window.location.href = "login.html";
  }

  // Init the date picker
  $("#datepicker").datepicker();

  // Get the form elements
  const title = document.querySelector("#title");
  const location = document.querySelector("#location");
  const description = document.querySelector("#description");
  const endDate = document.querySelector("#endDate");
  const isEmergency = document.querySelector("#isEmergency");
  const image = document.querySelector("#image");
  const submitButton = document.querySelector("#create-btn");
  const creator = document.querySelector("#creator");

  const creatorValue = VOLUNTEER_VANGUARD.getUser().name;
  // Add the value to the creator field
  creator.value = creatorValue;

  // Bind the submit button
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the values from the form
    const titleValue = title.value;
    const locationValue = location.value;
    const descriptionValue = description.value;
    const endDateValue = endDate.value;
    const isEmergencyValue = isEmergency.checked;
    const imageValue = image.value;

    // If required fields are populated create the opportunity opportunity object
    if (
      titleValue &&
      locationValue &&
      descriptionValue &&
      endDateValue &&
      creatorValue
    ) {
      const opportunity = {
        title: titleValue,
        location: locationValue,
        description: descriptionValue,
        endDate: endDateValue,
        isEmergency: isEmergencyValue,
        image: imageValue || "https://picsum.photos/200/300",
        creator: creatorValue,
      };

      // Add the opportunity to the DB
      VOLUNTEER_VANGUARD.addOpportunity(opportunity);

      // Redirect to the listing page
      window.location.href = "listing.html";
    }
  });
};

document.addEventListener("DOMContentLoaded", initNewOpportunity);
