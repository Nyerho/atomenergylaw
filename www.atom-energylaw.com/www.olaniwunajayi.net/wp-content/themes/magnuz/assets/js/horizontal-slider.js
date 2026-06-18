const animSections = document.querySelectorAll(".horizontal-section-scroll > .elementor > .elementor-element");
const animSection = document.querySelector(".horizontal-section-scroll > .elementor");
const removeAttribute = document.querySelector(".horizontal-section-scroll");



if (animSection) {
    removeAttribute.removeAttribute('data-scroll-container');
    animSection.setAttribute('data-scroll-container', '');

    animSections.forEach(item => {
        const innersection = item.querySelector('section');
        console.log(innersection);
        item.setAttribute('data-scroll-section', '');
        innersection.removeAttribute('data-scroll-section');
    })

    if (window.innerWidth > 1024) {

        const scroller = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            direction: "horizontal"
        });
    }
}