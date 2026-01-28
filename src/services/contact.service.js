export const createContactService = () => {
    let contacts = [];

    const getAll = () => structuredClone(contacts);

    const add = (contactData) => {
        const newContact = {
            ...contactData,
            id: Date.now(),
            createdAt: new Date().toISOString(),
        };
        contacts.push(newContact);
        return newContact;
    };

    const remove = (id) => {
        const numericId = Number(id);

        const index = contacts.findIndex((contact) => contact.id === numericId);
        if (index === -1) {
            console.warn(`Contact with id ${id} not found.`);
            return false;
        }
        contacts.splice(index, 1);
        return true;
    };

    return {
        getAll,
        add,
        remove,
    };
};

export const contactService = createContactService();