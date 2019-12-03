import contactItem from './contactItem';

function contact() {
    const contactInfoList = [
        {
            field: 'Address:',
            content: '4000 Forbes Ave, Pittsburgh, PA 15213'
        }, 
        {
            field: 'Phone:',
            content: '(555) 555-5555'
        }, 
        {
            field: 'Email:',
            content: 'joyfoodkitchen@email.com'
        }
    ]

    const element = document.createElement('main');
    
    const list = document.createElement('ul');

    contactInfoList.forEach(current => {
        element.append(contactItem(current));
    })

    return element;
}

export default contact;