// Function for UI interaction
const initUserLogin = () => {
  // Check if user is Logged in and redirect to home page
  if (VOLUNTEER_VANGUARD.isLoggedIn()) {
    window.location.href = "index.html";
  }

  // Check if the DB is initialized
  VOLUNTEER_VANGUARD.initDB();

  // Get the login form button
  const loginFormButton = document.querySelector("#login-btn");

  // Add the event listener for the login form button
  loginFormButton.addEventListener("click", (e) => {
    e.preventDefault();

    // get the email and password from the form
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    console.log("email", email);
    console.log("password", password);

    // attempt to log in the user
    const loginSuccess = VOLUNTEER_VANGUARD.login(email, password);

    // if the login is successful, redirect to the home page
    if (loginSuccess) {
      window.location.href = "index.html";
    }

    // if the login is not successful, show an error message
    else {
      const errorMessageBox = document.querySelector("#error-box");
      // Add the error message to the error message box
      errorMessageBox.innerHTML =
        "<span class='text-center'>Invalid email or password. <br> If you don't have an account try: j.doe@gmail.com, 123456</span>";
    }
  });
};

document.addEventListener("DOMContentLoaded", initUserLogin);
