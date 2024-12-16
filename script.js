var toggleButton = document.getElementById('toogle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'noon') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
