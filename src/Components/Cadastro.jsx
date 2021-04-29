import React from 'react';

import Logo from './LogoElo.jpeg';

export class Cadastro extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container">
                <div className="header">Cadastro</div>
                <div className="content">
                    <div className="image">
                        <a href="/">
                            <img src={Logo}/>
                        </a>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" name="usuario" placeholder="usuario"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="senha"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmacaoSenha">Confirmacao de Senha</label>
                            <input type="password" name="confirmacaoSenha" placeholder="confirmacaoSenha"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Cadastro</button>
                </div>
            </div>
        )
    }

}

export default Cadastro