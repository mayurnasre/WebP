// Create the navigation bar
const navbar = document.getElementById('nav');
const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'ContactUs', href: 'contactUs.html' },
    { name: 'Login', href: 'login.html' },
    { name: 'registration', href: 'registration.html' }
];
navbar.innerHTML = navLinks.map(function(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>';
}).join('');




