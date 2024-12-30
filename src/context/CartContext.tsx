import { createContext, useEffect, useState, ReactNode, useContext } from "react";

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    img: string;
    time?: string;
};

type CartContextType = { items: CartItem[], setItems: React.Dispatch<React.SetStateAction<CartItem[]>>, isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> };

export const cartContext = createContext<CartContextType>({ items: [], setItems: () => { }, isOpen: false, setIsOpen: () => { } });

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const localItems = localStorage.getItem("cart");
        if (localItems) {
            setItems(JSON.parse(localItems));
        } else {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        setLoading(false);
    }, []);

    return (
        <cartContext.Provider value={{items, setItems, isOpen, setIsOpen}}>
            {loading ? <p>Loading...</p> : children}
        </cartContext.Provider>
    );
};


export const useCartContext = () => useContext(cartContext);