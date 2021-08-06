import initializeWebsite from './website';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact'

init();


function init() {
initializeWebsite();
loadHome();
loadMenu();
loadContact();
}