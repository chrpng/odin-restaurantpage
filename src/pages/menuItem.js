function menuItem(item) {
    const element = document.createElement('li');
    element.classList.add('menu-item');
    const name = document.createElement('div');
    name.innerText = item.name;
    const price = document.createElement('div');
    price.innerText = `$${item.price}`
    
    element.append(name);
    element.append(price);
    return element;
}

export default menuItem;