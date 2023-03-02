const initSignUp = () => {
  // If the user is logged in, redirect to the home page
  if (VOLUNTEER_VANGUARD.isLoggedIn()) {
    window.location.href = "index.html";
  }

  // Get Form Elements
  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const role = document.querySelector("#role");
  const signUpButton = document.querySelector("#signup-btn");

  // Add the event listener for the sign up button
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the values from the form
    const nameValue = name.value;
    const surnameValue = surname.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const roleValue = role.value;

    // Create the user object
    const user = {
      name: `${nameValue} ${surnameValue}`,
      email: emailValue,
      password: passwordValue,
      role: roleValue,
    };

    // Add the user to the DB
    VOLUNTEER_VANGUARD.createUser(user);

    // Log in the user
    VOLUNTEER_VANGUARD.login(emailValue, passwordValue);

    // Redirect to the home page
    window.location.href = "index.html";
  });
};

document.addEventListener("DOMContentLoaded", initSignUp);