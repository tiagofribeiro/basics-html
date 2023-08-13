import Navigation from "./navigation.js";
import Theme from "./theme.js";

// document.ready
$(function () {
    console.log("A");
    if (typeof (Storage) !== "undefined") {
        var nav = new Navigation();

        $('#home').on("click", function () {
            nav.setPageContent(nav.pages[0]);
        });

        $('#content').on("click", function () {
            nav.setPageContent(nav.pages[1]);
        });

        $('#about').on("click", function () {
            nav.setPageContent(nav.pages[2]);
        });

        var theme = new Theme();

        $('.switch-wrapper').on("click", function () {
            $('.bulb').toggleClass('off');
            theme.setColorScheme(localStorage.selectedThemeIndex == 0 ? 1 : 0);
        });
    } else {
        console.log("Ainda não lidei com isso!");
    }
});