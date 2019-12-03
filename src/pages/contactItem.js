function contactItem(item) {
    const element = document.createElement('li');
    element.classList.add('contact-item');
    const field = document.createElement('div');
    field.innerText = item.field;
    const content = document.createElement('div');
    content.innerText = item.content;
    
    element.append(field);
    element.append(content);
    return element;
}

export default contactItem;