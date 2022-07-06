/* let menu = document.querySelector('#menu-icon');
let navList = document.quertySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('.bx-x');
	navList.classList.toggle('.active');
}

window.onscroll = () => {
	menu.classList.remove('.bx-x');
	navList.classList.remove('.active');
}

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})

sr.reveal('.about, .skills, .contact', {delay:200, origin:'bottom'})
*/

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})

sr.reveal('.about-text, .skills, .contact', {delay:200, origin:'bottom'})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};
