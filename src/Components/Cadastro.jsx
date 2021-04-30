import React from "react";

import Logo from "./LogoElo.jpeg";

export class Cadastro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="grid-container">
      //     <div className="grid-item">
      //         <h1>Cadastro</h1>
      //         <div className="content">
      //             <div className="image border">
      //                 <a href="/">
      //                     <img src={Logo}/>
      //                 </a>
      //             </div>
      //             <div className="form">
      //                 <div className="form-group">
      //                     <label htmlFor="usuario">Usuario</label>
      //                     <input type="text" name="usuario" placeholder="usuario"/>
      //                 </div>
      //                 <div className="form-group">
      //                     <label htmlFor="senha">Senha</label>
      //                     <input type="password" name="senha" placeholder="senha"/>
      //                 </div>
      //                 <div className="form-group">
      //                     <label htmlFor="confirmacaoSenha">Confirmacao de Senha</label>
      //                     <input type="password" name="confirmacaoSenha" placeholder="confirmacaoSenha"/>
      //                 </div>
      //             </div>
      //         </div>
      //         <div className="footer">
      //             <button type="button" className="btn">Cadastro</button>
      //         </div>
      //     </div>
      // </div>
    <div>
        <div className="grid-container">
            <h1 className="title">Cadastro</h1>
            <div className="border">
                <div className="form">
                <div className="grid-item spaced">
                    <input className="centralizado" type="text" name="usuario" placeholder="Usuario" />
                </div>
                <div className="grid-item spaced">
                    <input type="password" name="senha" placeholder="Senha" />
                </div>
                <div className="grid-item spaced">
                    <input
                    type="password"
                    name="confirmacaoSenha"
                    placeholder="Confirmacao de Senha"
                    />
                </div>
                <div className="grid-item spaced">
                    <a href="/login">
                        <button type="button" className="btn">Cadastar</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Cadastro;
