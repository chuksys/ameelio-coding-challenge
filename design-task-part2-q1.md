User {
    id: number,
    name: string,
    wallets: {
        free_tokens: {}[],
        premium_tokens: {}[]
    }
    mails: {}[]
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
    content: {}
}[]

I would place the critical API calls in a Promise.all block. I would also cache API results where user doesn't care much about updated data.