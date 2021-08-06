function home() {
    const home = document.createElement("div");
    home.classList.add('home');

    home.appendChild(createP("Choose from a varied selection of daily meats!"))
    home.appendChild(createP("Hours",
                            "Sunday: 11:00 - 22:00",
                            "Monday: 11:00 - 22:00",
                            "Tuesday: 11:00 - 22:00",
                            "Wednesday: 11:00 - 22:00",
                            "Thursday: 11:00 - 22:00",
                            "Friday: 11:00 - 22:00",
                            "Saturday: 11:00 - 22:00"))
    home.appendChild(createP("Creating dishes since 1888"))
    

}

function createP(text) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;
    return paragraph
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(home());
}

export default loadHome;