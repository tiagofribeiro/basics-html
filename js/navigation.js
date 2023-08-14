export default class Navigation {

    constructor() {
        this.pages = [
            './pages/home/index.html',
            './pages/content/index.html',
            './pages/about/index.html',
        ];

        // sessionStorage - remeber user's last visited page in case of reload (default home)
        this.selectedPage = sessionStorage.selectedPage ??= this.pages[0];

        this.setPageContent(this.selectedPage);
    }

    setPageContent(pagePath) {
        sessionStorage.selectedPage = pagePath;
    }
}