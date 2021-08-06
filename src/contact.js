function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone = document.createElement('p')
    phone.textContent = '123 456 7890'

    const address = document.createElement('p')
    address.textContent = '5th Avenue, NYC, NY'

    const location = document.createElement('img')
    location.src = 'images/location.png'
    location.alt = 'Le Carnivore location'

    contact.appendChild(phone);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact 
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(contact())
}

export default loadContact