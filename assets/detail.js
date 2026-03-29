(function () {
    function useLowDPI() {
        Array.prototype.forEach.call(document.getElementsByTagName("img"), function (img) {
            img.src = img.src.replace("/svg/", "/lowdpi/");
        });
        document.getElementById("highdpi").style.display = "inline";
        document.getElementById("lowdpi").style.display = "none";
    }

    function switchToLowDPI() {
        useLowDPI();
        localStorage.setItem("dpi", "low");
    }

    function useHighDPI() {
        Array.prototype.forEach.call(document.getElementsByTagName("img"), function (img) {
            var highDpiSrc = img.src.replace("/lowdpi/", "/svg/");
            if (img.src !== highDpiSrc) {
                img.src = highDpiSrc;
            }
        });
        document.getElementById("highdpi").style.display = "none";
        document.getElementById("lowdpi").style.display = "inline";
    }

    function switchToHighDPI() {
        useHighDPI();
        localStorage.setItem("dpi", "high");
    }

    function initDpiToggle() {
        var host = document.getElementById("dpi-toggle");
        if (!host) {
            return;
        }

        host.innerHTML =
            '<a href="javascript:switchToHighDPI()" id="highdpi">Switch to High-DPI</a>' +
            '<a href="javascript:switchToLowDPI()" id="lowdpi">Switch to Low-DPI</a><br>';

        useHighDPI();
        if (localStorage.getItem("dpi") === "low") {
            useLowDPI();
        }
    }

    window.switchToLowDPI = switchToLowDPI;
    window.switchToHighDPI = switchToHighDPI;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDpiToggle);
    } else {
        initDpiToggle();
    }
})();
