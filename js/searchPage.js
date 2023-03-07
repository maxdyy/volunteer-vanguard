// --------------------------------------------------------------  variables --------------------------------------------------------------
var searchBar = document.getElementsByClassName("searchBar")[0];
var style = window.getComputedStyle(searchBar);
var results = [];
const resultsAreaDiv = document.createElement("div");

window.addEventListener("resize", () => {
    setSearchAreaProperties();
});

searchBar.addEventListener("keypress", (e)=> {
    if (e.key == "Enter") {
        e.preventDefault();
        sessionStorage.setItem("results", JSON.stringify(results));
        sessionStorage.setItem("searchHistory", e.target.value);
        window.location.href = "searchPage.html";
    }
});

searchBar.addEventListener("focus", (e) => {
    // results = database.filter((volunteerProgram) => (volunteerProgram.title.toLowerCase().includes(e.target.value.toLowerCase())));;
    updateResultsArea(e);
})

searchBar.addEventListener("blur", (e) => {
    results = [];
    resultsAreaDiv.innerHTML = "";
    setSearchAreaProperties();
})
// -------------------------------------------------------------- functions --------------------------------------------------------------
// updates results array
function updateResultsArea(e) {
    resultsAreaDiv.innerHTML = "";

    // filter rows which contain search keyword
    results = VV_DB.opportunities.filter((volunteerProgram) => (volunteerProgram.title.toLowerCase().includes(e.target.value.toLowerCase())));

    // if e is blank then empty results array
    if (e.target.value == "") {
        // var temp = window.getComputedStyle(resultsAreaDiv);
        // temp.setProperty("display", "none");
        results = [];
    }

    // sort by prefix bias
    results = results.sort(
        (a, b) => (
            a.title.toLowerCase().indexOf(e.target.value.toLowerCase()) -
            b.title.toLowerCase().indexOf(e.target.value.toLowerCase())
        ));

    // add results to results area div
    for (const result of results) {
        const node = document.createElement("div");
        node.appendChild(document.createElement("button"));

        node.setAttribute("class", "resultDiv");
        node.childNodes[0].setAttribute("class", "btn btn-light resultBtn");
        node.childNodes[0].textContent = result.title;
        resultsAreaDiv.appendChild(node);
    }

    // add it to body of document
    document.body.appendChild(resultsAreaDiv);

    // update search area properties
    setSearchAreaProperties();
}

// set position and width 
function setSearchAreaProperties() {
    // ensure div sits below search bar and ensure div is same width as search bar
    let searchBarX = searchBar.getBoundingClientRect().left;
    let searchBarYBottom = searchBar.getBoundingClientRect().bottom;

    resultsAreaDiv.setAttribute("style", "left: " + searchBarX + "px; top: calc(" + searchBarYBottom + "px + 10px);width: calc(" + parseInt(searchBar.getBoundingClientRect().right - searchBar.getBoundingClientRect().left) + "px + 5px) !important;");

    for (const resBtn of document.getElementsByClassName("resultBtn")) {
        resBtn.setAttribute("style", "width: calc(" + parseInt(searchBar.getBoundingClientRect().right - searchBar.getBoundingClientRect().left) + "px - 1%) !important;");
    }

    // if no results, then remove padding
    if (results.length == 0) {
        resultsAreaDiv.style.padding = "0px";
    } 
    else {
        resultsAreaDiv.style.paddingTop = "5px";
        resultsAreaDiv.style.paddingBottom = "5px";
    }
}


// -------------------------------------------------------------- main --------------------------------------------------------------
// add event listener to all search bars
searchBar.addEventListener("input", updateResultsArea);

// create results area div
resultsAreaDiv.setAttribute("class", "resultsAreaDiv rounded");

// initialize search area in window
setSearchAreaProperties();

// const elem = document.createElement("div");
// elem.appendChild(document.createTextNode("Test"));
// elem.setAttribute("class", "text-center");
// elem.setAttribute("style", "position:relative;")
// searchBar.parentElement.appendChild(elem);
// console.log(searchBar.parentElement);