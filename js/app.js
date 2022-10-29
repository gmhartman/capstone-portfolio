// scroll fade
let elements = document.querySelectorAll('.card');
console.log(elements);
window.addEventListener('scroll', fadeIn );
function fadeIn() {
    for (let i = 0; i < elements.length; i++) {
        let elem = elements[i]
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (inView < 0) {
            elem.classList.add('inView');
        } else {
            elem.classList.remove('inView');
        }
    }
}
fadeIn();

