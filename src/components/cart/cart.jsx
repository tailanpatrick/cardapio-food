import { useEffect, useState, useContext } from 'react';
import { Dock } from 'react-dock';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import iconVoltar from '../../assets/img/voltar.png';
import ProdutoCart from '../../components/produto-cart/produto-cart.jsx';
import { CartContext } from '../../contexts/cart-context.jsx';


function Cart() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {cartItems, totalCart} = useContext(CartContext);



    useEffect(function () {
        window.addEventListener('openSidebar', function () {
            setShow(true);
        });
        
    }, []);

    function checkout(){
        navigate('/checkout')
    }

    return <Dock
        position='right'
        isVisible={show}
        fluid={false}
        size={410}

        onVisibleChange={(visible) => {
            setShow(visible)
        }}
    >
        
            <div className='btn-sair-carrinho'>
                <button className='btn' onClick={() => setShow(false)}>
                    <img src={iconVoltar} alt="" />
                </button>
            </div>
            <div className='text-center titulo-cart'>
                <h1>Meu Pedido</h1>
            </div>

            <div className='lista-produtos'>
                {
                    cartItems.map((item) => {
                        return <ProdutoCart key={item.id}
                                id={item.id}
                                nome={item.nome}
                                preco={item.preco}
                                qtd={item.qtd}
                                foto={item.foto} />
                    })
                }
            </div>

            <div className='footer-cart'>
                <div className='footer-cart-valor'>
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: "BRL" }).format(totalCart)}</strong></span>
                </div>
                <div className='text-center'>
                    <button  onClick={checkout} className="btn btn-red btn-checkout">Finalizar Pedido</button>
                </div>
            </div>
    
    </Dock>
}

export default Cart;