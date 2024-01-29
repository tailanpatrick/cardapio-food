import "./produto-vitrine.css";
import bagBlack from '../../assets/img/bag-black.png';
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

function ProdutoVitine(props) {

    const {AddItemCart} = useContext(CartContext);

    function AddItem() {
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto
        }

        AddItemCart(item);
    }

    return <div className="produto-box text-center">
        <img src={props.foto} alt="foto" />

        <div>
            <h2>{props.nome}</h2>
            <p className="prod-vitrine-descricao">{props.descricao}</p>
            <p className="prod-vitrine-preco">{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(props.preco)}</p>
        </div>

        <div>
            <button className="btn btn-red btn-cart" onClick={AddItem}>
                <img src={bagBlack} className="icon" alt="icone adicionar ao carrinho" />
                Adicionar
            </button>
        </div>
    </div>
}

export default ProdutoVitine;