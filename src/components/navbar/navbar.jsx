import { useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import bag from '../../assets/img/bag.png';
import Cart from '../cart/cart.jsx';


function Navbar(props) {

    const navigate = useNavigate();

    function historico() {
        navigate('/historico');
    }

    function openSidebar() {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    return <div className="navbar">
        <img src={logo} className="logotipo" alt="logotipo" />

        {
            props.showMenu &&
                <div className="menu">
                    <span onClick={historico}>Histórico</span>
                    
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