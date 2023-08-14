import Navigation from "./navigation.js";
import Theme from "./theme.js";

var navigationObj, themeObj;

function getNavigation() {
    if (!navigationObj)
        navigationObj = new Navigation();
    return navigationObj
}

function getTheme() {
    if (!themeObj)
        themeObj = new Theme();
    return themeObj;
}

// document.ready
$(function () {
    if (typeof (Storage) !== "undefined") {
        let nav = getNavigation();
        showPageContent();

        $('#home').on("click", function () {
            nav.setPageContent(nav.pages[0]);
            showPageContent();
        });

        $('#content').on("click", function () {
            nav.setPageContent(nav.pages[1]);
            showPageContent();
        });

        $('#about').on("click", function () {
            nav.setPageContent(nav.pages[2]);
            showPageContent();
        });
    } else {
        console.log("Ainda não lidei com isso!");
    }
});

// methods
function showPageContent() {
    $('#page-content').load(sessionStorage.selectedPage, function () {
        let theme = getTheme();
        getColorScheme(theme);

        $('.switch-wrapper').off('click');
        $('.switch-wrapper').on("click", function () {
            theme.setColorScheme(localStorage.selectedThemeIndex == 0 ? 1 : 0);
            getColorScheme(theme);
        });
    });
}

function getColorScheme(themeObj) {
    let selectedTheme = themeObj.themes[localStorage.selectedThemeIndex];
    let eventType = {
        'mouseenter': selectedTheme.hover,
        'mouseleave': selectedTheme.container
    }

    if (localStorage.selectedThemeIndex == 0)
        $('.bulb').addClass('off');
    else
        $('.bulb').removeClass('off');

    $('body').css({
        'color': selectedTheme.text,
        'background': selectedTheme.background,
    });

    $('.card').css('background', selectedTheme.container);

    $('li.card').on('mouseenter mouseleave', function (event) {
        // $(this).prepend('&gt;');
        $(this).css('background', eventType[event.type]);
    });
}