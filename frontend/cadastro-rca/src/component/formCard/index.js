import './styles.css'

const stGen = {
    marginbottom: "-50px"
}

const stEnd1 = {
    display: "flex",
    justifyContent: "spaceBetween"
}

const stEnd2 = {
    width: "60%",
    paddingLeft: "0"
}

const stEnd3 = {
    width: "40%",
    paddingRight: "0"
}

const stEnd4 = {
    left: "60%"
}



function Rca() {

    return (
 
        
                <div className="box">
                    <form action="">
                        <fieldset>
                            <legend className="title">Cadastro RCA</legend>


                            <div className="inputBox">
                                <input type="text" name="name" id="name" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Nome Completo</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="Email" id="Email" className="inputUser" required />
                                <label htmlFor="email" className="labelInput">E-mail</label>
                            </div>

                            <div className="inputBox">
                                <input type="tel" name="telefone" id="telefone" className="inputUser" required maxLength="14" />
                                <label htmlFor="telefone" className="labelInput">Telefone</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="cpf" className="inputUser" id="input_cpf" required autoComplete="on" maxLength="14" />
                                <label htmlFor="cpf" className="labelInput">CPF</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="cnpj" id="cnpj" className="inputUser" required autoComplete="on" maxLength="18" />
                                <label htmlFor="cnpj" className="labelInput">CNPJ</label>
                            </div>

                            <div className="inputBox" style={stGen}>
                                Sexo:
                                <div className="radio">
                                    <div className="input_div">
                                        <label htmlFor="feminino">Feminino</label>
                                        <input type="radio" id="feminino" name="genero" value="feminino" required />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="masculino">Masculino</label>
                                        <input type="radio" id="masculino" name="genero" value="masculino" required />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="outros">Outro</label>
                                        <input type="radio" id="outros" name="genero" value="outros" required />
                                    </div>
                                </div>
                            </div>

                            <div id="nascimento" className="inputBox">
                                <label htmlFor="datan_ascimento"><b>Data de Nascimento:</b></label>
                                <input type="date" name="datan_ascimento" id="data_nascimento" required />
                            </div>



                            <div className="inputBox">
                                <input type="text" name="cep" id="cep" className="inputUser" maxLength="10" required autoComplete="off" />
                                <label htmlFor="cep" className="labelInput">CEP</label>
                            </div>

                            <div className="inputBox" style={stEnd1}>
                                <div style={stEnd2}>

                                    <input type="text" name="endereco" id="endereco" className="inputUser" required />
                                    <label htmlFor="endereco" className="labelInput">Endereço</label>
                                </div>

                                <div style={stEnd3}>

                                    <input type=" number" name="numero" id="numero" className="inputUser" />
                                    <label htmlFor="numero" className="labelInput" style={stEnd4}>N°</label>
                                </div>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="bairro" id="bairro" className="inputUser" required />
                                <label htmlFor="bairro" className="labelInput">Bairro</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="cidade" id="cidade" className="inputUser" required />
                                <label htmlFor="cidade" className="labelInput">Cidade</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="estado" id="estado" className="inputUser" required />
                                <label htmlFor="estado" className="labelInput">Estado</label>
                            </div>



                            <div className="arquivos">
                                <div className="inputBox">
                                    <span>Identidade (Anexo):</span>
                                    <div className="inputFile">
                                        <label className="labelArquivos" htmlFor="identidade" id="identidade_L">
                                            <img className="imageInput" id="identidade_I" src="./add.png" />

                                        </label>
                                        <input type="file" name="identidade" id="identidade" required />

                                    </div>
                                </div>

                                <div className="inputBox">
                                    <span>CPF (Anexo):</span>

                                    <div className="inputFile">
                                        <label className="labelArquivos" htmlFor="CPF" id="CPF_L">
                                            <img className="imageInput" id="CPF_I" src="./add.png" />

                                        </label>
                                        <input type="file" name="CPF" id="CPF" required />
                                    </div>

                                </div>

                                <div className="inputBox">
                                    <span>Comprovante de residência (Anexo):</span>
                                    <div className="inputFile">
                                        <label className="labelArquivos" id="residencia_L" htmlFor="residencia">
                                            <img className="imageInput" id="residencia_I" src="./add.png" />
                                        </label>
                                        <input type="file" name="residencia" id="residencia" required />
                                    </div>
                                </div>
                            </div>

                            <input type="submit" name="submit" id="submit" />
                        </fieldset>
                    </form>
                </div>

         
    );
}

export default Rca;
