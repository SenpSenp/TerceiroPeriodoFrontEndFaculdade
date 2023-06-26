import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '../Card/Card';

//Comentários já realizados


const Comentar = () => {

    const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch('http://localhost:4000/comentarios');
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.error('Erro ao obter os comentarios:', error);
      }
    };

    fetchComentarios();
  }, []);


  const history = useHistory();

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


  const handleCadastro = async () => {
    try {

      const response = await axios.get('http://localhost:4000/comentarios');
      const comentarios = response.data;

      const maxId = comentarios.reduce((max, comentario) => (comentario.id > max ? comentario.id : max), 0);
      const nextId = maxId + 1;


      const novoComentario = {
        id: nextId,
        nome: formData.nome,
        comentario: formData.comentario
        
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

      history.push('/Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
        toast.error('Erro no cadastro. Verifique os dados e tente novamente.')
      }
  };

  return (
    <div>
        <div className='sessaoComentarios'>
        <h1>
            Comentários do produto
        </h1>
        {comentarios.map((comentarios) => (
            <div>
            <h2 className='nomeComentario'>
                {comentarios.nome}
            </h2>
            <p>
                {comentarios.comentario}
            </p>
            </div>
                
        ))}
        </div>
        <div className="cadastroContainer">
      <h2 className="Cadastro-h2">Caixa de comentário:</h2>
      <form className="cadastroForms">
        <br />
        <label className="Cadastro-label">
          Nome Público:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="Cadastro-input"
          />
        </label>
        <br />
        <label className="Cadastro-label">
          Comentário:
          <input
            type="text"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            className="Cadastro-input"
          />
        </label>
        <br />
        <button type="button" onClick={handleCadastro} className="Cadastro-button">
          Enviar comentário
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>
    
  );
};

export default Comentar;
