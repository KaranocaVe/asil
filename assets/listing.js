(function () {
    function setDisplayByClass(className, value) {
        Array.prototype.forEach.call(document.getElementsByClassName(className), function (element) {
            element.style.display = value;
        });
    }

    function switchToLong() {
        setDisplayByClass("l", "inline");
        setDisplayByClass("s", "none");
        document.getElementById("shortasm").style.display = "inline";
        document.getElementById("longasm").style.display = "none";
        localStorage.setItem("longasm", "long");
    }

    function switchToShort() {
        setDisplayByClass("s", "inline");
        setDisplayByClass("l", "none");
        document.getElementById("longasm").style.display = "inline";
        document.getElementById("shortasm").style.display = "none";
        localStorage.setItem("longasm", "short");
    }

    function initAsmToggle() {
        var host = document.getElementById("asm-toggle");
        if (!host) {
            return;
        }

        host.innerHTML =
            '<a href="javascript:switchToLong()" id="longasm" style="color:#000">Switch to long assembly</a>' +
            '<a href="javascript:switchToShort()" id="shortasm" style="color:#000;display:none">Switch to short assembly</a><br>';

        if (localStorage.getItem("longasm") === "long") {
            switchToLong();
        }
    }

    window.switchToLong = switchToLong;
    window.switchToShort = switchToShort;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAsmToggle);
    } else {
        initAsmToggle();
    }
})();
