import "./Style.css"
import React from 'react'

import Logo from './LogoElo.jpeg';

export { Login } from "./Login";
export { Cadastro } from "./Cadastro";


export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-container">
                <div className="grid-item">
                    <h1>Bem vindo ao projeto Elo Group!</h1>
                    <div className="content">
                        <div className="image border">
                            <a href="/">
                                <img src={Logo}/>
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="grid-item-btn">
                        <a href="/cadastro">
                            <button type="button" className="btn button-space">Cadastro</button>
                        </a>
                        <a href="/login">
                            <button type="button" className="btn button-space">Login</button>
                        </a>
                    </div>
            </div>
        )
    }

}

export default MainPage