(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    "use strict";
    window.addEventListener("load", windowLoad);
    function windowLoad() {
        document.addEventListener("click", documentActions);
    }
    function documentActions(event) {
        const targetElement = event.target;
        if (targetElement.hasAttribute("data-goto")) {
            const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
            const headerHeight = document.querySelector(`.header`).offsetHeight;
            if (gotoElement) window.scrollTo({
                top: gotoElement.offsetTop - headerHeight,
                behavior: "smooth"
            });
            event.preventDefault();
        }
        if (targetElement.classList.contains("items-works__type") && !targetElement.classList.contains("active")) {
            const activeElement = document.querySelector(`.items-works__type.active`);
            const elements = document.querySelectorAll(`.items-works__item`);
            const elementType = targetElement.dataset.workType;
            activeElement.classList.remove("active");
            targetElement.classList.add("active");
            elements.forEach((element => {
                !elementType || element.dataset.workType === elementType ? element.hidden = false : element.hidden = true;
            }));
        }
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
})();