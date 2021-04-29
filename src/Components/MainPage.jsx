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
            <div className="flexbox-container">
                <div className="flexbox-item flexbox-item-1">
                    <h1>Bem vindo ao projeto Elo Group!</h1>
                    <div className="content">
                        <div className="image">
                            <a href="/">
                                <img className="borda" src={Logo}/>
                            </a>
                        </div>
                    </div>
                    <div className="footer">
                    <a href="/cadastro">
                            <button type="button" className="btn">Cadastro</button>
                        </a>
                    </div>
                    <div className="footer">
                        <a href="/login">
                            <button type="button" className="btn">Login</button>
                        </a>
                    </div>
                </div>
                <div className="flexbox-item flexbox-item-2"></div>
                <div className="flexbox-item flexbox-item-3"></div>
                <div className="flexbox-item flexbox-item-4"></div>
            </div>
        )
    }

}

export default MainPage