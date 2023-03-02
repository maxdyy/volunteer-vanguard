const initHome = () => {
  const loggedUI = document.querySelector("#home-logged");
  const anonymousUI = document.querySelector("#home-anonymous");
  
  // Check if the user is logged in
  if (VOLUNTEER_VANGUARD.isLoggedIn()) {
    loggedUI.classList.remove("d-none");
    anonymousUI.classList.add("d-none");
  } else {
    loggedUI.classList.add("d-none");
    anonymousUI.classList.remove("d-none");
  }
};

document.addEventListener("DOMContentLoaded", initHome);