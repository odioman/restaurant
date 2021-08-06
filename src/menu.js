function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        "Steak",
        "Broiled to Order"
    ));
    menu.appendChild(createMenuItem(
        "Chicken Pepe",
        "Chicken Seared with Pepper"
    ));
    menu.appendChild(createMenuItem(
        "Beef Stroganoff",
        "Boneless Rib Eye, Egg Noodles, Sour Cream, Worcestershire Sauce"
    ));
    
    menu.appendChild(createMenuItem(
        "Veal Cutlet",
        "Veal Cutlets, Lemon, Panko, Eggs, Sea Salt"
    ));
    
    menu.appendChild(createMenuItem(
        "Duck Noodle",
        "Roasted Duck Breasts, Bok Choy, Udon Noodles, Soy Sauce"
    ));
    
    menu.appendChild(createMenuItem(
        "Partridge Stew",
        "Partridge, Brown Sugar, Carrots, Mushroom, Basil"
    ));
    
    return menu;
} 


function createMenuItem(name, description) {
const menuItem = document.createElement('div');
menuItem.classList.add('menu-item');

const foodName = document.createElement("h2");
foodName.innerHTML = name;

const foodDescription = document.createElement('p');
foodDescription.innerHTML = description 

menuItem.appendChild(foodName);
menuItem.appendChild(foodDescription);

return menuItem
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu)
}

export default loadMenu;