var pagePath = './pages/';

$(document).ready(function () {
    
    // using sessionStorage to remember last page user visited in case of reload
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.getItem("selectedPage") == null)
            sessionStorage.selectedPage = "home/index.html";

        $('#home').click(function () {
            sessionStorage.selectedPage = "home/index.html";
            $('#page-content').load(pagePath + sessionStorage.selectedPage);
        });
        $('#content').click(function () {
            sessionStorage.selectedPage = "content/index.html";
            $('#page-content').load(pagePath + sessionStorage.selectedPage);
        });
        $('#about').click(function () {
            sessionStorage.selectedPage = "about/index.html";
            $('#page-content').load(pagePath + sessionStorage.selectedPage);
        });

        $('#page-content').load(pagePath + sessionStorage.selectedPage);
    } else {
        console.log("SessionStorage indisponível! Lide com isso, Tiago.");
    }

});
