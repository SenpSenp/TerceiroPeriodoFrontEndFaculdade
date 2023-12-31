import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col } from 'react-bootstrap';

const Comentar = ({ idProduto }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const response = await fetch(`http://localhost:4000/comentarios?idProduto=${idProduto}`);
      const data = await response.json();
      setComentarios(data);
    } catch (error) {
      console.error('Erro ao obter os comentarios:', error);
    }
  };

  const [formData, setFormData] = useState({
    id: '',
    idProduto: '',
    nome: '',
    comentario: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const verificarDados = async () => {
    if (formData.nome.length < 5 || formData.comentario.length < 5) {
      throw new Error('Username e senha devem ter no mínimo 5 caracteres');
    }
    };


  const handleCadastro = async () => {
    try {
      await verificarDados();

      const response = await axios.get('http://localhost:4000/comentarios');
      const comentarios = response.data;

      const maxId = comentarios.reduce((max, comentario) => (comentario.id > max ? comentario.id : max), 0);
      const nextId = maxId + 1;

      const novoComentario = {
        id: nextId,
        nome: formData.nome,
        comentario: formData.comentario,
        idProduto: idProduto
      };

      const comentarPromise = new Promise((resolve) =>
        setTimeout(() => {
          resolve(axios.post('http://localhost:4000/comentarios', novoComentario));
        }, 3000)
      );

      toast.promise(comentarPromise, {
        pending: 'Aguarde...',
        success: 'Comentado!',
        error: 'Erro no comentário.'
      });

      await comentarPromise;

      setFormData({
        id: '',
        nome: '',
        comentario: ''
      });

      fetchComentarios();
    } catch (error) {
      console.error('Erro ao comentar:', error.message);
      toast.error('Erro no comentário. O nome e o comentário necessitam de pelo menos 5 caracteres cada.');
    }
  };

  return (
    <div className='branco'>
      <div className='sessaoComentarios'>
        <Row className="product-description-row">
          <Col xs={12}>
            <h1>Comentários do produto:</h1>
            {comentarios.map((comentario) => (
              <div key={comentario.id}>
                <h2>{comentario.nome} disse:</h2>
                <p className="product-description">{comentario.comentario}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="ComentarioContainer">
        <h2 className="Comentario-h2">Caixa de comentário:</h2>
        <form className="ComentarioForms">
          <br />
          <label className="Comentario-label">
            Nome Público:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="Comentario-input"
            />
          </label>
          <br />
          <label className="Comentario-label">
            Comentário:
            <input
              type="text"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              className="Comentario-input"
            />
          </label>
          <br />
          <button type="button" onClick={handleCadastro} className="Comentario-button">
            Enviar comentário
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Comentar;
