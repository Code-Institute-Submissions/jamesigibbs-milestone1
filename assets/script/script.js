let scWidth = screen.width;
const newNav = document.createElement('li');
const download = document.createElement('a')

download.className = 'nav-link'
download.href = '#'
download.innerText = 'Download CV';

newNav.className = "navitem";


const navbar = document.querySelector('ul.navbar-nav');

if (scWidth <= 500) {
    navbar.append(newNav);
    navbar.appendChild(download);
}; 
