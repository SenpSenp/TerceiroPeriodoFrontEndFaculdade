import "./Perfil.css"
import React from "react";

const Perfil = () => {

  const AguardandoPagamento = () => {
    return (
      <div>
        <h6>Pedido Aguardando Pagamento</h6>
        {/* Conteúdo  */}
      </div>
    );
  };
  
 
  const AguardandoEnvio = () => {
    return (
      <div>
        <h6>Pedido Aguardando Envio</h6>
        {/* Conteúdo  */}
      </div>
    );
  };
  
 
  const Enviado = () => {
    return (
      <div>
        <h6>Pedido Enviado</h6>
        {/* Conteúdo  */}
      </div>
    );
  };
  

  const AguardandoAvaliacao = () => {
    return (
      <div>
        <h6>Pedido Aguardando Avaliação</h6>
        {/* Conteúdo  */}
      </div>
    );
  };

  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-4" style={{ height: "300px" }}>
          <div className="card" style={{ height: "90%", marginBottom: "20px" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "bold" }}>
                Nome de perfil
              </h5>
              <div>
                <button className="btn btn-primary">{AguardandoPagamento} Aguardando Pagamento</button>
                <button className="btn btn-primary">{AguardandoEnvio} Aguardando Envio</button>
                <button className="btn btn-primary">{Enviado}Enviado</button>
                <button className="btn btn-primary">{AguardandoAvaliacao}Aguardando Avaliação</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Divisão 2</h5>
              <p className="card-text">Conteúdo da Divisão 2</p>
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
