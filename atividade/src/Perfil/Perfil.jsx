import React, { useState } from 'react';
import "./Perfil.css"


const Perfil = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [mostrarEnderecos, setMostrarEnderecos] = useState(false);
  const [mostrarHistoricoCompras, setMostrarHistoricoCompras] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados do perfil enviados:", { nome, email, endereco });
  };

  return (
    <div className="container">
      <h2>Meu perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <textarea
            className="form-control"
            id="endereco"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>

      <div className="mt-4">
        <button className="btn btn-primary mr-2" onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>Carrinho</button>
        <button className="btn btn-primary mr-2" onClick={() => setMostrarEnderecos(!mostrarEnderecos)}>Meus Endereços</button>
        <button className="btn btn-primary" onClick={() => setMostrarHistoricoCompras(!mostrarHistoricoCompras)}>Histórico de Compras</button>
      </div>

      {mostrarCarrinho && (
        <div className="mt-4">
          {/* Conteúdo  */}
        </div>
      )}

      {mostrarEnderecos && (
        <div className="mt-4">
          {/* Conteúdo  */}
        </div>
      )}

      {mostrarHistoricoCompras && (
        <div className="mt-4">
          {/* Conteúdo */}
        </div>
      )}
    </div>
  );
}

export default Perfil;
