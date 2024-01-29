import "./produto-cart.css";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";


function ProdutoCart(props) {
    const {AlterOrDeleteItemCart} = useContext(CartContext);

    function lessQtdOrRemove() {
        const item = {
            id: props.id,
            nome: props.nome, 
            preco: props.preco,
            foto: props.foto, 
            qtd: props.qtd
        }
        AlterOrDeleteItemCart(item);
    }

    function plusQtd() {
        const item = {
            id: props.id,
            nome: props.nome, 
            preco: props.preco,
            foto: props.foto, 
            qtd: props.qtd
        }
        AlterOrDeleteItemCart(item, 'plus');
    }

    return <div className="produto-cart-box">
        <img src={props.foto} alt="foto" />

        <div>
            <p className="produto-cart-nome">{props.nome}</p>
            <p className="produto-cart-valor">{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(props.preco)}</p>

            <div className="footer-produto-cart">
                <div>
                    <button className="btn footer-produto-btn" onClick={lessQtdOrRemove}>-</button>
                    <span className="footer-produto-qtd">{props.qtd}</span>
                    <button className="btn footer-produto-btn" onClick={plusQtd}>+</button>
                </div>

                <p className="footer-produto-preco">{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(props.preco*props.qtd)}</p>
            </div>


        </div>

    </div>
}

export default ProdutoCart;