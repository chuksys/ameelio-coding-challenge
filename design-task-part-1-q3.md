User {
    id: number,
    name: string,
    wallets: {
        free_tokens: {}[],
        premium_tokens: {}[]
    }
}

contacts {
    name: string,
    inmateId: number,
    created_by: number 
}[]

designs {
    cost: {}[]
}[]

mail {
    id: number,
    contactId: number,
    totalCost: number,
    content: {},
    contactIds: number[]
}[]