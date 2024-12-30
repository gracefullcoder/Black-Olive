// import React from "react";

export const addToCart = (items: any, setItems: any, id: number, title: string, price: number, quantity: number, img: string, time: string) => {
    const newProd = { id, title, price, quantity, img, time }
    localStorage.setItem("cart", JSON.stringify([...items, newProd]));
    setItems((prev: any) => [...prev, newProd])
}

// React.Dispatch<React.SetStateAction<cartItem[]>>
export const removeFromCart = (id: number, setItems: any) => {
    setItems((prev: any) => {
        const updatedCart = prev.filter((item: any) => item.id != id)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart
    })
}

export const IncQty = (id: number, setItems: any) => {
    setItems((prev: any) => {
        const updatedCart = prev.map((item: any) => {
            if (item.id == id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart
    })
}

export const DecQty = (id: number, setItems: any) => {
    setItems((prev: any) => {
        const updatedCart = prev.map((item: any) => {
            if (item.id == id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart
    })
}

