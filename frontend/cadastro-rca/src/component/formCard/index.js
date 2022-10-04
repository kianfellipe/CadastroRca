import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import './styles.css'
import axios from 'axios'
import icon from './add.png'


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
     
    const [rca, setRca] = useState ({
        fullName:'',
        email:'',
        tel:'',
        cpf:'',
        cnpj:'',
        sex:'',
        bDate:'',
        cep:'',
        endereco:'',
        num:'',
        bairro:'',
        cidade:'',
        estado:'',
        anexId:'',
        anexCpf: '',
        anexResid:''
    
    })
    
    const {fullName, email, tel, cpf, cnpj, sex, bDate, cep, endereco, num, bairro, cidade, estado, anexId, anexCpf, anexResid} = rca
    
    const onInputChange = (e) => {
        setRca({ ...rca, [e.target.name]: e.target.value })
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/nova', rca)
    
    }

    return (
 
        
                <div className="box">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <fieldset>
                            <legend className="title">Cadastro RCA</legend>


                            <div className="inputBox">
                                <input type={"text"} 
                                name="fullName" 
                                className="inputUser" 
                                autoComplete="off"
                                value={fullName}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="nome" className="labelInput">Nome Completo</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" 
                                name="email" 
                                className="inputUser" 
                                autoComplete="off"
                                value={email}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="email" className="labelInput">E-mail</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="(99)99999-9999" 
                                type="tel" name="tel" 
                                id="telefone" 
                                className="inputUser" 
                                autoComplete="off"
                                value={tel}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="telefone" className="labelInput">Telefone</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="999.999.999-99" 
                                type="text" name="cpf" className="inputUser" 
                                id="input_cpf" 
                                autoComplete="off"
                                value={cpf}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="cpf" className="labelInput">CPF</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="99.999.999/9999-99" type="text" name="cnpj" 
                                id="cnpj" className="inputUser"
                                value={cnpj}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="cnpj" className="labelInput">CNPJ</label>
                            </div>
                            <div className="inputBox" style={stGen}>
                                Sexo:
                                <div className="radio"  value={sex}
                                onChange={(e) => onInputChange(e)}>
                                    <div className="input_div">
                                        <label htmlFor="feminino">Feminino</label>
                                        <input type="radio" id="feminino" name="genero" value="feminino"  
                                        />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="masculino">Masculino</label>
                                        <input type="radio" id="masculino" name="genero" value="masculino"  />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="outros">Outro</label>
                                        <input type="radio" id="outros" name="genero" value="outros"  />
                                    </div>
                                </div>
                            </div> 

                            <div className="inputBox" style={stGen}>
                                Sexo:
                                <div className="radio"  value={sex}
                                onChange={(e) => onInputChange(e)}>
                                    <div className="input_div">
                                        <label htmlFor="feminino">Feminino</label>
                                        <input type="radio" id="feminino" name="genero" value="feminino"  
                                        />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="masculino">Masculino</label>
                                        <input type="radio" id="masculino" name="genero" value="masculino"  />
                                    </div>

                                    <div className="input_div">
                                        <label htmlFor="outros">Outro</label>
                                        <input type="radio" id="outros" name="genero" value="outros"  />
                                    </div>
                                </div>
                            </div> 



                            <div id="nascimento" className="inputBox">
                                <label htmlFor="datan_ascimento"><b>Data de Nascimento:</b></label>
                                <input type="date" 
                                name="bDate" 
                                id="data_nascimento"  
                                value={bDate}
                                onChange={(e) => onInputChange(e)}/>
                            </div>



                            <div className="inputBox">
                                <ReactInputMask mask="99999-999" type="text" name="cep" 
                                id="cep" className="inputUser" 
                                value={cep}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="cep" className="labelInput">CEP</label>
                            </div>

                            <div className="inputBox" style={stEnd1}>
                                <div style={stEnd2}>
                                    <input type="text" name="endereco" id="endereco" className="inputUser" 
                                    autoComplete="off"
                                    value={endereco}
                                    onChange={(e) => onInputChange(e)} />
                                    <label htmlFor="endereco" className="labelInput">Endereço</label>
                                </div>

                                <div style={stEnd3}>
                                    <input type="number" name="num" id="numero" className="inputUser" 
                                    autoComplete="off"
                                    value={num}
                                    onChange={(e) => onInputChange(e)}/>
                                    <label htmlFor="numero" className="labelInput" style={stEnd4}>N°</label>
                                </div>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="bairro" id="bairro" className="inputUser"  
                                autoComplete="off"
                                value={bairro}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="bairro" className="labelInput">Bairro</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="cidade" id="cidade" className="inputUser"  
                                autoComplete="off"
                                value={cidade}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="cidade" className="labelInput">Cidade</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="estado" id="estado" className="inputUser"  
                                autoComplete="off"
                                value={estado}
                                onChange={(e) => onInputChange(e)}/>
                                <label htmlFor="estado" className="labelInput">Estado</label>
                            </div>



                            <div className="arquivos">
                                <div className="inputBox">
                                    <span>Identidade (Anexo):</span>
                                    <div className="inputFile">
                                        <label className="labelArquivos" htmlFor="identidade" id="identidade_L">
                                            <img className="imageInput" src={icon} alt="ident" />

                                        </label>
                                        <input type="file" name="anexId" id="identidade"  
                                        value={anexId}
                                        onChange={(e) => onInputChange(e)}/>

                                    </div>
                                </div>

                                <div className="inputBox">
                                    <span>CPF (Anexo):</span>

                                    <div className="inputFile">
                                        <label className="labelArquivos" htmlFor="CPF" id="CPF_L">
                                            <img className="imageInput" id="CPF_I" src={icon} alt="cpf" />

                                        </label>
                                        <input type="file" name="anexCpf" id="CPF"  
                                        value={anexCpf}
                                        onChange={(e) => onInputChange(e)}/>
                                    </div>

                                </div>

                                <div className="inputBox">
                                    <span>Comprovante de residência (Anexo):</span>
                                    <div className="inputFile">
                                        <label className="labelArquivos" id="residencia_L" htmlFor="residencia">
                                            <img className="imageInput" id="residencia_I" src={icon} alt="compr" />
                                        </label>
                                        <input type="file" name="anexResid" id="residencia"  
                                        value={anexResid}
                                        onChange={(e) => onInputChange(e)}/>
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
