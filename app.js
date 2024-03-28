// onClick Scroll To Page Functions
function scrollToTop() {
    window.scrollTo(0,0);
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight
    });
}

function scrollToDiv(divID) {
    var element = document.getElementById(divID);
        if (element) {
            element.scrollIntoView({block: 'start'});
        }
}


// scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollButton = document.getElementById("topButton");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}


// Fade Effect Functions
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));