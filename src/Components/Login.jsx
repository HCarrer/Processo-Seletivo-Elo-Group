import React from 'react';

import Logo from './LogoElo.jpeg';

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container">
                <div className="header">Login</div>
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
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        )
    }

}

export default Login