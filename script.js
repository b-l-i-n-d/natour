let navToggleCheckbox = document.querySelector('#nav-toggle');
let navBtn = document.querySelector('.navigation__button');

navBtn.addEventListener('click', function() {
    if (navToggleCheckbox.checked) {
        navToggleCheckbox.setChecked = false;
    } else {
        navToggleCheckbox.setChecked = true;
    }
});
