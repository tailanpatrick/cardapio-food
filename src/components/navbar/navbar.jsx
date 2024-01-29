import { useNavigate, useLocation } from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/img/logo.png';
import bag from '../../assets/img/bag.png';
import Cart from '../cart/cart.jsx';


function Navbar(props) {

    const navigate = useNavigate();
    const pathName = useLocation().pathname;

    function historico() {
        navigate('/historico');
    }

    function openSidebar() {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    function home() {
        navigate('/');
    }

    return <div className="navbar">
        <img onClick={home} src={logo} className="logotipo" alt="logotipo" />

        {
            props.showMenu &&
            <div className="menu">
                {
                    
                    pathName !== '/historico' ?
                        <span onClick={historico}>Histórico</span>
                        :
                        <span onClick={home}>Cardápio</span>
                }

                <button onClick={openSidebar} className="btn btn-red">
                    <img src={bag} className="icon" alt="Sacola" />
                    Sacola
                </button>
            </div>
        }

        <Cart />
    </div>
}

export default Navbar;