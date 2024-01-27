import InstantSearch from "./InstantSearch.js";

const searchSoft = document.querySelector("#searchSoft");
const instantSearchSoft = new InstantSearch(searchSoft, {
    searchUrl: new URL("/en/live-search", window.location.origin),
    queryParam: "searchString",
    responseParser: (responseData) => {
        return responseData.soft;
    },
    templateFunction: (result) => {
        return `
            <div class="instant-search__title">${result.name}</div>
            <p class="instant-search__platform platform-${result.platform_name.toLowerCase()}">${result.platform_name}</p>
            <p class="instant-search__description">${result.description}</p>
        `;
    }
});
