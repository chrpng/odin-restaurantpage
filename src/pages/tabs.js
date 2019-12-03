import home from './home';
import contact from './contact';
import menu from './menu';

function tabs() {
    const container = document.getElementById('content');

    const element = document.createElement('ul');
    element.classList.add('tab-bar');

    const homeTab = document.createElement('li');
    homeTab.classList.add('home-tab');
    homeTab.classList.add('active');
    homeTab.innerText = 'Home';
    
    const menuTab = document.createElement('li');
    menuTab.classList.add('menu-tab');
    menuTab.innerText = 'Menu';
    
    const contactTab = document.createElement('li');
    contactTab.classList.add('contact-tab');
    contactTab.innerText = 'Contact';

    const clearContainer = () => container.lastChild.remove();

    const removeActive = () => {
        const current = document.getElementsByClassName('active');

        if(current.length > 0) {
            current[0].classList.remove('active');
        }
    };

    const load = (e, page) => {
        removeActive();
        console.log(e.target);
        e.target.classList.add('active');
        clearContainer();
        container.append(page);
    }

    homeTab.addEventListener('click', (e) => load(e, home()));
    menuTab.addEventListener('click', (e) => load(e, menu()));
    contactTab.addEventListener('click', (e) => load(e, contact()));

    element.append(homeTab, menuTab, contactTab);

    return element;
}

export default tabs;