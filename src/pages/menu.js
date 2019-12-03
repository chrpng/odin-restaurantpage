import menuItem from './menuItem';

function menu() {
    const menuList = [
        {
            name: 'Appetizers',
            items: [
                { name: 'Egg Roll (1)', price: '1.25' },
                { name: 'Crab Rangoon (6)', price: '4.50' },
                { name: 'Fried Chicken Wings (6)', price: '4.95' }
            ]
        },
        {
            name: 'Soups',
            items: [
                { name: 'Egg Drop Soup', price: '2.95' },
                { name: 'Hot & Sour Soup', price: '2.95' },
                { name: 'Wonton Soup', price: '2.95' }
            ]
        }
    ]
    const element = document.createElement('main');
    element.classList.add('menu');
    menuList.forEach(sect => {
        const section = document.createElement('h2');
        const list = document.createElement('ul');
        section.innerText = sect.name;

        sect.items.forEach(current => {
            list.append(menuItem(current));
        })

        element.append(section);
        element.append(list);
    });

    return element;
}

export default menu;