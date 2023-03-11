// -------------------------------------------------------------- functions --------------------------------------------------------------
function updateCards() {
	// for (each category in filterstate)
	// {
	//     tempSearchResults = [];
	//     for (each button in category) {
	//         for (each vp in searchResults) {
	//             if (vp.category == button) {
	//                 tempSearchResults.push(vp);
	//             }
	//         }
	//     }
	//     searchResults = newSearchResults;
	// }


	let newSearchResults = JSON.parse(JSON.stringify(searchResults));

	// if search results are empty, start with the full database
	if (searchResults.length == 0) {
		newSearchResults = VV_DB.opportunities;
	}

	for (let category of Object.keys(filtersState)) {
		// if no category option is selected, continue to next category
		if (filtersState[category].length == 0) continue;

		let tempSearchResults = [];

		for (let vp of newSearchResults) {
			if (filtersState[category].includes(String(vp[category]))) {
				tempSearchResults.push(vp);
			}
		}

		newSearchResults = JSON.parse(JSON.stringify(tempSearchResults));
	}


	// creation of cards
	searchPageResults.innerHTML = "";
	for (const dbObj of newSearchResults) {
		searchPageResults.appendChild(createCard(dbObj));
	}
}

function createCard(dbObj) {
	// find days left 
	// mm dd yyyy
	// 03/04/2023
	let endDate = new Date(dbObj.endDate.split("/")[2], dbObj.endDate.split("/")[0], dbObj.endDate.split("/")[1]);
	let today = new Date();
	let daysLeft = Math.floor((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

	return new DOMParser().parseFromString(`<div class="card mb-3 overflow-hidden shadow-sm" id="temp">
    <div class="row g-0">
      <div class="col-3 overflow-hidden">
        <img
          class="h-100 w-100 object-fit-contain"
          src="`+ dbObj.image + `"
        />
      </div>
      <div class="col-8">
        <div class="card-body">
          <div class="d-flex justify-content-end">
            <i class="bi bi-three-dots text-primary fs-3"></i>
          </div>
          <h5 class="card-title justify-content-begin">`+ dbObj.title + `</h5>
          <div class="d-flex">
            <p class="card-text text-muted">
              <i class="bi bi-person-fill text-primary fs-4"> </i
              ><span>` + dbObj.creator + `</span>
            </p>
            <p class="card-text text-muted ps-3 pt-1">
              <i class="bi bi-clock-fill `+ ((dbObj.isEmergency) ? 'text-danger' : 'text-primary') + ` fs-5"></i
              ><span style="margin-left:10px;">` + daysLeft + ` days left </span>
            </p>
          </div>
          <p class="card-text">
            `+ dbObj.description + `
          </p>
          <div class="d-flex justify-content-end"> 
            <a class="w-60 btn btn-primary btn-sm" href="`+ dbObj.href + `"
              >View Application</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>`, 'text/html').getElementById("temp");
}

function createFilterButtons(category, parentDiv) {
	const title = document.createElement("h4");
	title.appendChild(document.createTextNode(category.charAt(0).toUpperCase() + category.slice(1)));
	title.style = "text-align : center";
	parentDiv.appendChild(title);

	const buttonsContainer = document.createElement("div");
	buttonsContainer.setAttribute("class", "row justify-content-around")

	for (let categoryOption of filtersState[category]) {
		let button = new DOMParser().parseFromString(`<div id="tmp" class="btn btn-primary col-5" style="margin-top: 5px;margin-bottom: 5px;">` + categoryOption + `</div>`, 'text/html').getElementById("tmp");
		button.removeAttribute("id");

		button.setAttribute("class", "btn btn-secondary col-5");

		button.addEventListener('click', () => {
			if (filtersState[category].includes(categoryOption)) {
				filtersState[category].splice(filtersState[category].indexOf(button.textContent), 1);
				button.setAttribute("class", "btn btn-secondary col-5");
			}
			else {
				filtersState[category].push(button.textContent);
				button.setAttribute("class", "btn btn-primary col-5");
			}

			searchBar.value = sessionStorage.getItem("searchHistory");

			updateCards();
		})

		buttonsContainer.appendChild(button);
	}
	parentDiv.appendChild(buttonsContainer);

	// adds a line to separate categories
	let line = document.createElement("hr");
	line.style = "color : lightgrey";
	parentDiv.appendChild(line);
}

function populateFiltersState() {
	for (var vp of VV_DB.opportunities) {
		if (!filtersState.location.includes(vp.location)) {
			filtersState.location.push(vp.location);
		}

		if (!filtersState.creator.includes(vp.creator)) {
			filtersState.creator.push(vp.creator);
		}
	}
}

// -------------------------------------------------------------- main --------------------------------------------------------------
var searchBar = document.getElementsByClassName("searchBar")[0];
var searchPageResults = document.getElementById("searchPageResults");
var filter = document.getElementById("filter");

searchBar.value = sessionStorage.getItem("searchHistory");

var searchResults = JSON.parse(sessionStorage.getItem("results"));

var filtersState = { location: [], creator: [], isEmergency: ["YES", "NO"] };

populateFiltersState();
createFilterButtons("location", filter);
createFilterButtons("creator", filter);
createFilterButtons("isEmergency", filter);

filtersState = { location: [], creator: [], isEmergency: [] };

updateCards();
