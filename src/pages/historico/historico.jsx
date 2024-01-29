import Navbar from '../../components/navbar/navbar.jsx';
import "./historico.css";
import { pedidos } from '../../dados.js';

function Historico() {

    return <>
        <Navbar showMenu />
        <div className="container menu-spacing">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>

            </div>

            <div className='box-historico'>
                <table className='table'>
                    <tbody>
                        {
                            pedidos.map((ped) => {
                                return <tr key={ped.id_pedido}>
                                    <td><strong>#{ped.id_pedido}</strong></td>
                                    <td className='text-light'>{ped.dt}</td>
                                    <td className='text-red'>
                                        <strong>{new Intl.NumberFormat('pt-BR',
                                            { style: 'currency', currency: "BRL" }).format(ped.total)}
                                        </strong>
                                    </td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Historico;