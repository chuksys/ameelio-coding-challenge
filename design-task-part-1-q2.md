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

contacts {
    name: string,
    inmateId: number,
    created_by: number,
    currentView: bool 
}[]

designs {
    cost: {}[]
}[]

mail {
    id: number,
    contactId: number,
    totalCost: number,
    content: {}
}[]