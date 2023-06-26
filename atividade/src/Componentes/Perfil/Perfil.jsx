import React from "react";
import foto from "./foto/fotoPerfil.png";
import "./Perfil.css";
import { Link } from "react-router-dom";

const Perfil = () => {
  const usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
  const nomeUsuario = usuarioConectado?.nome || "usuário";

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-4">
          <div className="perfil-container perfil-container-1">
            <div className="perfil-card">
              <img src={foto} alt="Imagem" className="perfil-foto" />
              <p className="perfil-nome">Bem-vindo, {nomeUsuario}</p>
              <Link to="/editarcadastro">
                <button className="perfil-button">Editar Cadastro</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="perfil-container perfil-container-2">
            <div className="perfil-resumo">
              <p className="perfil-titulo">RESUMO DO SEU ÚLTIMO PEDIDO</p>
              <div className="perfil-pedido">
                <table className="perfil-table">
                  <thead>
                    <tr>
                      <th>NUMERO PEDIDO</th>
                      <th>STATUS PEDIDO</th>
                      <th>DATA</th>
                      <th>PAGAMENTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1231231231</td>
                      <td>ConcluÍdo</td>
                      <td>20/03/2012</td>
                      <td>PIX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="perfil-endereco">
                <table className="perfil-table">
                  <tbody>
                    <tr>
                      <th>ENDEREÇO</th>
                      <th>CÓDIGO DE RASTREIO</th>
                    </tr>
                    <tr>
                      <td>Rua Martins Barbosa</td>
                      <td>12A659FBM23</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <button className="perfil-ver-pedidos">VER TODOS OS PEDIDOS</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="perfil-container perfil-container-3">
            <div className="perfil-divisao3">
              <h5 className="perfil-divisao3-titulo">Divisão 3</h5>
              <p className="perfil-divisao3-conteudo">Conteúdo da Divisão 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
