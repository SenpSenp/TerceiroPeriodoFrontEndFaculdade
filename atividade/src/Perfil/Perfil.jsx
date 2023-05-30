import "./Perfil.css"
import React from "react";
import foto from "./foto/fotoPerfil.png"

const Perfil = () => {

  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-4" style={{ height: "200px" }}>
          <div className="card" style={{ height: "200px", marginBottom: "40px" }}>
            <div className="card-body">
            <img src={foto} alt="Imagem" style={{ width: "90px" }} />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Bem-vindo, (nome do usuário)
            </p>
            </div>
          </div>
        </div>
            <div className="col-md-12" style={{ textAlign: "left", marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          <p className="text1">RESUMO DO SEU ÚLTIMO PEDIDO</p>
            </div>


        <div className="col-md-6" style={{ height: "400px" }}>
          <div className="card" style={{ height: "350px", marginBottom: "40px" }}>
            <div className="card-body" style={{ marginTop: "30px", marginLeft: "50px" }}>
              
                <span className="btn btn-primary">NUMERO PEDIDO</span>
                <span className="btn btn-primary" style={{marginLeft: "125px" }}>STATUS PEDIDO</span>
                <span className="btn btn-primary" style={{marginLeft: "160px" }}>DATA</span>
                <span className="btn btn-primary" style={{marginLeft: "150px" }}>PAGAMENTO</span>
            </div>


            <div className="card-body-2" style={{ marginTop: "20px", marginLeft: "90px", marginBottom: "30px"  }}>
              
                <span className="btn btn-primary">#1231231231</span>
                <span className="btn btn-primary">Concluido</span>
                <span className="btn btn-primary">20/03/2012</span>
                <span className="btn btn-primary">PIX</span>
            </div>

            <hr />

            <div className="card-body-2" style={{ marginTop: "10px", marginLeft: "90px", marginBottom: "50px"  }}>
                <span className="btn btn-primary">ENDEREÇO</span>
                <span className="btn btn-primary" style={{marginLeft: "500px" }}>AZUL</span> 
            </div>
            <div className="card-body-2" style={{ marginTop: "10px", marginLeft: "70px", marginBottom: "20px"  }}>
                <span className="btn btn-primary">Rua Martins Barbosa</span>
                <span className="btn btn-primary" style={{marginLeft: "500px" }}>AZUL</span> 
            </div>

            <hr />

            <div className="card-body-2" style={{ marginTop: "40px", marginLeft: "90px"  }}>
              
                <span className="btn btn-primary">#1231231231</span>
                <span className="btn btn-primary">Concluido</span>
                
            </div>


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
