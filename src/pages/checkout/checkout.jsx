import Navbar from "../../components/navbar/navbar.jsx";
import "./checkout.css"

function Checkout() {
    return <>
        <Navbar />
        <div className="container">
            <div className="titulo text-center">
                <h1>Finalizar Pedido</h1>
            </div>

            <div className="col-3">
                <div className="box-checkout">
                    <h3>Dados Pessoais</h3>

                    <div className="input-group">
                        <p>Nome Completo: </p>
                        <input type="text" name="nome" id="nome" />

                    </div>
                    <div className="input-group">
                        <p>CPF: </p>
                        <input type="text" name="cpf" id="cpf" />
                    </div>

                    <div className="input-group">
                        <p>Telefone de Contato: </p>
                        <input type="text" name="telefone" id="telefone" />
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="box-checkout">
                    <h3>Endereço de Entrega</h3>

                    <div className="input-group">
                        <p>CEP: </p>
                        <input type="text" name="cep" id="cep" />
                    </div>

                    <div className="input-group">
                        <p>Endereço: </p>
                        <input type="text" name="endereco" id="endereco" />
                    </div>

                    <div className="input-group">
                        <p>Bairro: </p>
                        <input type="text" name="bairro" id="bairro" />
                    </div>

                    <div className="input-group">
                        <p>Cidade: </p>
                        <input type="text" name="cidade" id="cidade" />
                    </div>

                    <div className="input-group">
                        <p>Estado: </p>
                        <select id="uf" value={'MG'}>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="col-3">
                <div className="box-checkout">
                    <h3>Valores</h3>

                    <div className="checkout-valores">
                        <span>Total:</span>
                        <span>
                            <strong>R$ 50,00</strong>
                        </span>

                    </div>

                    <div className="checkout-button">
                        <button className="btn btn-red btn-checkout">Finalizar Pedido</button>
                    </div>
                </div>
            </div>

        </div>


    </>
}

export default Checkout;