import "./produto-vitrine.css";
import foto from '../../assets/img/hamburguer.png';
import bagBlack from '../../assets/img/bag-black.png';

function ProdutoVitine(){
    return <div className="produto-box text-center">
        <img src={foto} alt="foto"/>

        <div>
            <h2>Spicy Burger</h2>
            <p className="prod-vitrine-descricao">Hamburger de 250g, queijo, tomate, alface e cebola</p>
            <p className="prod-vitrine-preco">R$ 18,90</p>
        </div>

        <div>
            <button className="btn btn-red btn-cart">
                <img src={bagBlack} className="icon" alt="icone adicionar ao carrinho" />
                Adicionar
            </button>
        </div>
    </div>
}

export default ProdutoVitine;