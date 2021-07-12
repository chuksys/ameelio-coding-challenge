User {
    id: number,
    name: string,
    wallets: {
        free_tokens: {},
        premium_tokens: {}
    }
    currentViewMailId: number,
    currentViewContactId: number
}

Contacts {
    name: string,
    inmateId: number,
    created_by: number,
    currentView: bool 
}

Designs {
    cost: {}[]
}

Mail {
    id: number,
    contactId: number,
    totalCost: number,
    content: {}
}