const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Thiago',
    email: 'thiago@mail.com',
    phone: '12345678',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();
