export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(x => x.id === cartItemToAdd.id)
    const otherItems = cartItems.filter(x => x.id !== cartItemToAdd.id)

    let targetItem = null

    if (existingItem) {
        existingItem.quantity++
        targetItem = existingItem
    } else {
        targetItem = cartItemToAdd
        targetItem.quantity = 1
    }

    console.log([...otherItems, targetItem])

    return [...otherItems, targetItem]
}

export const calcCartCount = cartItems => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
}
