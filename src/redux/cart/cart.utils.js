export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(x => x.id === cartItemToAdd.id)

    if (existingItem) {
        return cartItems.map(x =>
            x.id === existingItem.id ? { ...x, quantity: x.quantity + 1 } : x
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(item => item.id === cartItemToRemove.id)

    if (existingItem.quantity <= 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    )
}
