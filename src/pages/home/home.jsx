import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";
import api from "../../services/api.js";

function Home() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get('/produtos')
        .then((resp)=> {
            setProdutos(resp.data)
        })
        .catch((err) => {
            alert('Erro ao carregar produtos')
        })

    }, []);

    return <>
        <Navbar showMenu />
        <div className="container menu-spacing">
            <div className="titulo text-center">
                <h1>Nosso Cardápio</h1>
                <p className="subtitulo">Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo Whatsapp:<br /> <span className="txt-primary">(31) 98807-6912.</span></p>
            </div>
        </div>

        <div className="container text-center">
            {
                produtos.map((prod) => {
                    return <ProdutoVitrine key={prod.id_produto}
                        id={prod.id_produto}
                        nome={prod.nome}
                        descricao={prod.descricao}
                        preco={prod.preco}
                        foto={prod.foto} />
                })
            }
        </div>
    </>
}

export default Home;