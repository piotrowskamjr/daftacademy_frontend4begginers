// Show/hide page navigation
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    const menuButton = document.querySelector('.menu-button');

    pageNavigation.classList.toggle('show-page-navigation');
    menuButton.classList.toggle('menu-button--opened');
});

// Mark ticket as bought
const concerts = document.querySelector('.concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        const concertsInfo = buyTicketButton.parentElement;

        concertsInfo.append(haveFunText);
        haveFunText.textContent = 'Have fun!';
        concertsInfo.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
    };
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(Object.values(formObject));
});
