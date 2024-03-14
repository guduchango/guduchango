
var div_aboutme = document.getElementById('about-me');
var div_experience = document.getElementById('experience');
var div_education = document.getElementById('education');
var div_proyects = document.getElementById('proyects');
var main = document.querySelector('main');

console.log(main.attributes)

document.getElementById('btn-about-me').addEventListener('click', function () {
    div_aboutme.style.display = 'block';
    div_experience.style.display = 'none';
    div_education.style.display = 'none';
    div_proyects.style.display = 'none';
});

document.getElementById('btn-experience').addEventListener('click', function () {
    div_experience.style.display = 'block';
    div_aboutme.style.display = 'none';
    div_education.style.display = 'none';
    div_proyects.style.display = 'none';
});

document.getElementById('btn-education').addEventListener('click', function () {
    div_education.style.display = 'block';
    div_aboutme.style.display = 'none';
    div_experience.style.display = 'none';
    div_proyects.style.display = 'none';
});

document.getElementById('btn-proyects').addEventListener('click', function () {
    div_proyects.style.display = 'block';
    div_aboutme.style.display = 'none';
    div_experience.style.display = 'none';
    div_education.style.display = 'none';
});

/* Mobile logical */

document.getElementById('mobileHomeIcon-btn').addEventListener('click', function () {
    div_aboutme.style.display = 'block';
    main.style.display = 'block';
    div_experience.style.display = 'none';
    div_education.style.display = 'none';
    div_proyects.style.display = 'none';
});

document.getElementById('experienceHomeIcon-btn').addEventListener('click', function () {
    div_aboutme.style.display = 'none';
    main.style.display = 'none';
    div_experience.style.display = 'block';
    div_education.style.display = 'none';
    div_proyects.style.display = 'none';
});

document.getElementById('educationHomeIcon-btn').addEventListener('click', function () {
    div_aboutme.style.display = 'none';
    main.style.display = 'none';
    div_experience.style.display = 'none';
    div_education.style.display = 'block';
    div_proyects.style.display = 'none';
});

document.getElementById('projectsHomeIcon-btn').addEventListener('click', function () {
    div_aboutme.style.display = 'none';
    main.style.display = 'none';
    div_experience.style.display = 'none';
    div_education.style.display = 'none';
    div_proyects.style.display = 'block';
});



