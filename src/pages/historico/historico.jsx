import Navbar from '../../components/navbar/navbar.jsx';
import "./historico.css";
import { useEffect, useState } from 'react';
import api from '../../services/api.js'

function Historico() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() =>{
        api.get('/pedidos')
        .then((resp) => {
            setPedidos(resp.data);
        })
        .catch((err) => {
            alert('Erro ao carregar histórico')
        })
    },[]);

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
                                    <td className='text-light'>{ped.dt_pedido}</td>
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