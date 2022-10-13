import React, { Component } from 'react'
import ReactInputMask from 'react-input-mask'
import './styles.css'
import icon from './add.png'
import axios from 'axios'


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



class Rca extends Component {


    state = {
        file: null,
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
    }



    handleFile(e) {
        let file = e.target.files[0]
        this.setState({ file: file })
        
        
    }


    onSubmit(e) {
        console.log(this.state, 'THE STATE --------- $$$$')

        let file = this.state.file
        let rca = new Blob([JSON.stringify({
            fullName: this.state.fullName,
            email: this.state.email,
            tel: this.state.tel,
            cpf: this.state.cpf,
            cnpj: this.state.cnpj,
            sex: this.state.sex,
            bDate: this.state.bDate,
            cep: this.state.cep,
            num: this.state.num,
            bairro: this.state.bairro,
            endereco: this.state.endereco,
            cidade: this.state.cidade,
            estado: this.state.estado
          })], {
          type: 'application/json'
        })

        let formData = new FormData()

        formData.append('file', file)
        formData.append('rca', rca)

        axios({
            url: "http://localhost:8080/nova",
            method: "POST",
            data: formData
        })

    }

    render() {
        return (

            <div className="box">

                <fieldset>
                    <legend className="title">Cadastro RCA</legend>
                    <div className="inputBox">
                                <input type="text"
                                name="fullName" 
                                className="inputUser" 
                                autoComplete="off"
                                value={this.state.fullName} 
                                onChange={e => this.setState({fullName: e.target.value})}/>
                                <label htmlFor="nome" className="labelInput">Nome Completo</label>
                            </div>
                            <div className="inputBox">
                                <input type="text" 
                                name="email" 
                                className="inputUser" 
                                autoComplete="off"
                                value={this.state.email}
                                onChange={e => this.setState({email: e.target.value})}/>
                                <label htmlFor="email" className="labelInput">E-mail</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="(99)99999-9999" 
                                type="text" name="tel" 
                                id="telefone" 
                                className="inputUser" 
                                autoComplete="off"
                                value={this.state.tel}
                                onChange={e => this.setState({tel: e.target.value})}/>
                                <label htmlFor="telefone" className="labelInput">Telefone</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="999.999.999-99" 
                                type="text" name="cpf" className="inputUser" 
                                id="input_cpf" 
                                autoComplete="off"
                                value={this.state.cpf}
                                onChange={e => this.setState({cpf: e.target.value})}/>
                                <label htmlFor="cpf" className="labelInput">CPF</label>
                            </div>

                            <div className="inputBox">
                                <ReactInputMask mask="99.999.999/9999-99" type="text" name="cnpj" 
                                id="cnpj" className="inputUser"
                                value={this.state.cnpj}
                                onChange={e => this.setState({cnpj: e.target.value})}/>
                                <label htmlFor="cnpj" className="labelInput">CNPJ</label>
                            </div>
                            <div className="inputBox" style={stGen}>
                                Sexo:
                                <div className="radio"  value={this.state.sex}
                                onChange={e => this.setState({sex: e.target.value})}>
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
                                value={this.state.bDate}
                                onChange={e => this.setState({bDate: e.target.value})}/>
                            </div>



                            <div className="inputBox">
                                <ReactInputMask mask="99999-999" type="text" name="cep" 
                                id="cep" className="inputUser" 
                                value={this.state.cep}
                                onChange={e => this.setState({cep: e.target.value})}/>
                                <label htmlFor="cep" className="labelInput">CEP</label>
                            </div>

                            <div className="inputBox" style={stEnd1}>
                                <div style={stEnd2}>
                                    <input type="text" name="endereco" id="endereco" className="inputUser" 
                                    autoComplete="off"
                                    value={this.state.endereco}
                                    onChange={e => this.setState({endereco: e.target.value})} />
                                    <label htmlFor="endereco" className="labelInput">Endereço</label>
                                </div>

                                <div style={stEnd3}>
                                    <input type="number" name="num" id="numero" className="inputUser" 
                                    autoComplete="off"
                                    value={this.state.num}
                                    onChange={e => this.setState({num: e.target.value})}/>
                                    <label htmlFor="numero" className="labelInput" style={stEnd4}>N°</label>
                                </div>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="bairro" id="bairro" className="inputUser"  
                                autoComplete="off"
                                value={this.state.bairro}
                                onChange={e => this.setState({bairro: e.target.value})}/>
                                <label htmlFor="bairro" className="labelInput">Bairro</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="cidade" id="cidade" className="inputUser"  
                                autoComplete="off"
                                value={this.state.cidade}
                                onChange={e => this.setState({cidade: e.target.value})}/>
                                <label htmlFor="cidade" className="labelInput">Cidade</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="estado" id="estado" className="inputUser"  
                                autoComplete="off"
                                value={this.state.estado}
                                onChange={e => this.setState({estado: e.target.value})}/>
                                <label htmlFor="estado" className="labelInput">Estado</label>
                            </div>



                    <div className="arquivos">
                        <div className="inputBox">
                            <span>Identidade (Anexo):*</span>
                            <div className="inputFile">
                              

                                <div>
                                    <input type='text' value={this.state.email} 
                                     onChange={e => this.setState({email: e.target.value})}></input>
                                </div>
                                <label className="labelArquivos" htmlFor="identidade" id="identidade_L">
                                    <img className="imageInput" src={icon} alt="ident" />

                                </label>
                                <input type="file" id="identidade"

                                    onChange={(e) => this.handleFile(e)} />

                            </div>
                        </div>
                    </div>
                    <input type="submit" onClick={(e) => this.onSubmit(e)} />
                </fieldset>

            </div>


        );
    }
}

export default Rca;
