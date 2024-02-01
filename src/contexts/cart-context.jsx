import { createContext, useState } from "react";

const CartContext = createContext();


function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function AddItemCart(item) {
        let itemIndex = cartItems.findIndex(cartItem => item.id === cartItem.id);


        const updatedItems = itemIndex !== -1 ?
            cartItems.map((item, index) =>
                index === itemIndex
                    ? { ...item, qtd: item.qtd + 1 }
                    : item
            ) : [...cartItems, { ...item, qtd: 1 }];

        setCartItems(updatedItems);
        calcTotalCart(updatedItems);
    }

    function AlterOrDeleteItemCart(item, command = 'less') {
        let itemFound = cartItems.find(cartItem => item.id === cartItem.id);
        let itemFoundIndex = cartItems.indexOf(itemFound);

        const updatedItems = command === 'plus' ?
            // operação plus add + 1 a quantidade do item ao carrinho
            cartItems.map((item, index) =>
                index === itemFoundIndex
                    ? { ...item, qtd: item.qtd + 1 }
                    : item
            )

            // operação != de plus diminui quantidade ou deleta item do carrinho, caso a qtd for 1 ele é deletado
            : itemFound.qtd > 1 ?
                cartItems.map((item, index) =>
                    index === itemFoundIndex
                        ? { ...item, qtd: item.qtd - 1 }
                        : item
            )
            : cartItems.filter(item =>
                    item.id !== itemFound.id)

        setCartItems(updatedItems);
        calcTotalCart(updatedItems);

    }

    function calcTotalCart(items){
        let tot = 0;
        for(let item of items){
            tot = tot + (item.preco * item.qtd)
        }
        setTotalCart(tot);     
    }

    return <CartContext.Provider value={{ cartItems, setCartItems, AddItemCart, AlterOrDeleteItemCart, totalCart, setTotalCart}}>
        {props.children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };