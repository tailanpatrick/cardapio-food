import './navbar.css';
import logo from '../../assets/img/logo.png';
import bag from '../../assets/img/bag.png';

function Navbar(){
    return <div className="navbar"> 
        <img src={logo} className="logotipo" alt="logotipo"/>

        <div className="menu">
            <a href="#">Histórico</a>
            <button className="btn btn-red">
                <img src={bag} className="icon" alt="Sacola" />
                Sacola
            </button>
        </div>
    </div>
}

export default Navbar;