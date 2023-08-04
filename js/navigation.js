var pagePath = '../pages/';

$(document).ready(function () {
    $('#page-content').load(pagePath + 'home/index.html');
    $('#home').click(function () {
        $('#page-content').load(pagePath + 'home/index.html');
    });
    $('#about').click(function () {
        $('#page-content').load(pagePath + 'about/index.html');
    });
    $('#content').click(function () {
        $('#page-content').load(pagePath + 'content/index.html');
    });
});