document.addEventListener("DOMContentLoaded", function () {

    const navigation = performance.getEntriesByType("navigation")[0];

    if (navigation && navigation.type === "reload") {

        const currentPage = window.location.pathname;
        const currentHash = window.location.hash;

        const isHomePage =
            currentPage.endsWith("index.html") ||
            currentPage.endsWith("/") ||
            currentPage.endsWith("\\");

        // Refresh from any section of Home page
        if (isHomePage && currentHash !== "") {
            window.location.replace("./index.html");
            return;
        }

        // Refresh from any separate HTML page
        if (!isHomePage) {
            window.location.replace("./index.html");
        }

    }

});