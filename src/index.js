import './reset.css';
import './style.css';
import logo from './images/chinese-svgrepo-com.svg'
import home from './pages/home';
// import contact from './pages/contact';
// import menu from './pages/menu';
import tabs from './pages/tabs';

const container = document.getElementById('content');

const logoContainer = document.createElement('div');
logoContainer.classList.add('logo-container');

const logoImg = document.createElement('img');
logoImg.src = logo;
logoImg.classList.add('logo-img');

const logoText = document.createElement('div');

const logoName = document.createElement('h1');
logoName.innerText = "Joy Food Kitchen";
const tagline = document.createElement('h3');
tagline.innerText = "Eat happy.";
tagline.classList.add('tag-line');
logoText.append(logoName, tagline);

logoContainer.append(logoImg, logoText);


document.body.prepend(tabs());
document.body.prepend(logoContainer);

container.append(home());