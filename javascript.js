

// get the element to animate
var element = document.querySelector('p');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
    // get window height
    var windowWidth = window.innerWidth;
    // get number of pixels that the document is scrolled
    var scrollX = window.scrollX || window.pageXOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollX + windowWidth;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().left + scrollX + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('animate');
    }
    if (!inView()) {
        // element is in view, add class to element
        element.classList.remove('animate');
    }
}
