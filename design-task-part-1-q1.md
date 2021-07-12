User {
    id: number,
    name: string,
    wallets: {
        free_tokens: {}[],
        premium_tokens: {}[]
    }
}

Contacts {
    name: string,
    inmateId: number,
    created_by: number 
}

Designs {
    cost: {}[]
}

Mail {
    id: number,
    contactId: number,
    totalCost: number,

}