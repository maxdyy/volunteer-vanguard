const VOLUNTEER_VANGUARD = {};

// Static DB for the app
// the DB is a JSON object and is stored in the localStorage
// the DB is loaded from the localStorage when the app starts

// the DB object
const VV_DB = {
    user: null,
    users: [{
            name: "John Doe",
            email: "j.doe@gmail.com",
            password: "123456",
            type: "NGO",
        },
        {
            name: "Anna Smith",
            email: "a.smith@gmail.com",
            password: "123456",
            type: "Volunteer",
        },
    ],
    opportunities: [{
            title: "Helping the homeless",
            location: "New York",
            description: "Helping the homeless in New York",
            creator: "John D.",
            endDate: "04/12/2023",
            isEmergency: false,
            image: "./images/winter.jfif",
            href: "./winter.html",
        },
        {
            title: "Wildlife training",
            location: "Kenya",
            description: "Helping the wildlife in Kenya",
            creator: "Anna S.",
            endDate: "05/22/2023",
            isEmergency: true,
            image: "./images/wildlife.jfif",
            href: "./wildlife.html",
        },
        {
            title: "Building wells for water",
            location: "Santo Domingo",
            description: "Helping the people in Santo Domingo",
            creator: "John D.",
            endDate: "12/04/2023",
            isEmergency: false,
            image: "./images/wells.jpeg",
            href: "./wells.html",
        },
        {
            title: "Animal rescue",
            location: "Los Angeles",
            description: "Helping the animals in Los Angeles",
            creator: "Carlos S.",
            endDate: "04/22/2023",
            isEmergency: true,
            image: "./images/animals.jpg",
            href: "./animals.html",
        },
        {
            title: "Earthquake help",
            location: "Mexico City",
            description: "Helping the people in Mexico City",
            creator: "Lucia G.",
            endDate: "05/22/2023",
            isEmergency: true,
            image: "./images/earthquake.jpg",
            href: "./earthquake.html",
        },
    ],
};

// Function to check if the DB is initialized on the localStorage
// if not, it will initialize it
VOLUNTEER_VANGUARD.initDB = () => {
    if (!localStorage.getItem("VV_DB")) {
        localStorage.setItem("VV_DB", JSON.stringify(VV_DB));
    }
};

// Function to force the DB initialization
VOLUNTEER_VANGUARD.forceInitDB = () => {
    localStorage.setItem("VV_DB", JSON.stringify(VV_DB));
};

// Function to get the DB from the localStorage
VOLUNTEER_VANGUARD.getDB = () => {
    return JSON.parse(localStorage.getItem("VV_DB"));
};

// Update the DB in the localStorage
VOLUNTEER_VANGUARD.updateDB = (db) => {
    localStorage.setItem("VV_DB", JSON.stringify(db));
};

// Function to check if the user is logged in
VOLUNTEER_VANGUARD.isLoggedIn = () => {
    const db = VOLUNTEER_VANGUARD.getDB();
    return db.user !== null;
};

// Function to get the current user
VOLUNTEER_VANGUARD.getUser = () => {
    const db = VOLUNTEER_VANGUARD.getDB();
    return db.user;
};

// Function to set the current user
VOLUNTEER_VANGUARD.createUser = (user) => {
    const db = VOLUNTEER_VANGUARD.getDB();
    db.users.push(user);
    VOLUNTEER_VANGUARD.updateDB(db);
};

// Function to log in the user
VOLUNTEER_VANGUARD.login = (email, password) => {
    const db = VOLUNTEER_VANGUARD.getDB();
    const user = db.users.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        db.user = user;
        VOLUNTEER_VANGUARD.updateDB(db);
        return true;
    }
    return false;
};

// Function to log out the current user
VOLUNTEER_VANGUARD.logout = () => {
    const db = VOLUNTEER_VANGUARD.getDB();
    db.user = null;
    VOLUNTEER_VANGUARD.updateDB(db);
};

const initApp = () => {
    // Initialize the DB
    VOLUNTEER_VANGUARD.initDB();

    // Header logic
    // Check if the user is logged in
    if (VOLUNTEER_VANGUARD.isLoggedIn()) {
        // Get the header elements
        const headerAnonymous = document.querySelector("#header-anonymous");
        const headerLogged = document.querySelector("#header-logged");
        const headerUser = document.querySelector("#header-username");
        const logoutButton = document.querySelector("#header-logout");

        // Get the user
        const user = VOLUNTEER_VANGUARD.getUser();

        // Set the user name in the header
        headerUser.innerHTML = user.name;

        // Hide the anonymous header
        headerAnonymous.classList.add("d-none");

        // Show the logged header
        headerLogged.classList.remove("d-none");

        // Bind the logout button
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            VOLUNTEER_VANGUARD.logout();
            window.location.href = "login.html";
        });
    }
};

// Initialize the APP
document.addEventListener("DOMContentLoaded", initApp);