import React from "react";
import foto from "./foto/fotoPerfil.png";
import "./Perfil.css";

const Perfil = ({ usuarioConectado }) => {
  const nomeUsuario = usuarioConectado?.nome || "";

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ height: "200px", marginBottom: "40px" }}>
            <div className="card-body">
              <img src={foto} alt="Imagem" style={{ width: "90px" }} />
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Bem-vindo, {nomeUsuario}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <p className="text1 mt-3">RESUMO DO SEU ÚLTIMO PEDIDO</p>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ height: "350px", marginBottom: "40px" }}>
          <div className="card-body mt-3 ml-5">
          <table className="table">
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
            <div className="card-body mt-2 ml-5 mb-5">
              <table className="table">
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
            <button className="btn-text">VER TODOS OS PEDIDOS</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Divisão 3</h5>
              <p className="card-text">Conteúdo da Divisão 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;