import { useEffect, useState } from 'react';
import { Dock } from 'react-dock';
import ProdutoCart from '../produto-cart/produto-cart';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import iconVoltar from '../../assets/img/voltar.png';


function Cart() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(function () {
        window.addEventListener('openSidebar', function () {
            setShow(true);
        })
    }, [])

    function checkout(){
        navigate('/checkout')
    }

    return <Dock
        position='right'
        isVisible={show}
        fluid={false}
        size={450}

        onVisibleChange={(visible) => {
            setShow(visible)
        }}
    >
        
            <div className='btn-sair-carrinho'>
                <button className='btn' onClick={() => {setShow(false)}}>
                    <img src={iconVoltar} alt="" />
                </button>
            </div>
            <div className='text-center titulo-cart'>
                <h1>Meu Pedido</h1>
            </div>

            <div className='lista-produtos'>
                <ProdutoCart />
                <ProdutoCart />
                <ProdutoCart />
                <ProdutoCart />
                <ProdutoCart />
                <ProdutoCart />
                <ProdutoCart />
            </div>

            <div className='footer-cart'>
                <div className='footer-cart-valor'>
                    <span>Total</span>
                    <span><strong>R$ 250,00</strong></span>
                </div>
                <div className='text-center'>
                    <button  onClick={checkout} className="btn btn-red btn-checkout">Finalizar Pedido</button>
                </div>
            </div>
    
    </Dock>
}

export default Cart;