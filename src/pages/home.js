import splashImg from '../images/Shanghai-Dumpling-King_SORAYA-MATOS_2018__MG_0804.jpg';

function home() {
    const container = document.createElement('div');
    
    const splash = document.createElement('div');
    splash.classList.add('splash');

    const image = document.createElement('img');
    image.setAttribute('src', splashImg);
    image.classList.add('home-img');
    splash.append(image);
    
    const lunchMenu = document.createElement('div');
    lunchMenu.classList.add('lunch-menu');
    
    const lunchMenuPromotion = document.createElement('h2');
    lunchMenuPromotion.classList.add('lunch-menu-promotion')
    lunchMenuPromotion.innerText = 'Check out our new lunch specials!'
    lunchMenu.append(lunchMenuPromotion);

    const lunchMenuBtn = document.createElement('button');
    lunchMenuBtn.innerText = 'Order now';
    lunchMenu.append(lunchMenuBtn);
    
    splash.append(lunchMenu);
    
    const element = document.createElement('main');
    element.classList.add('home');
    
    const copyright = document.createElement('footer');
    copyright.innerText = '\u00A9 Copyright 2019 by Joy Food Kitchen';
    copyright.classList.add('hero');
    element.append(copyright);
    
    container.append(splash, element);

    return container;
}

export default home;