import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';
import './Modal.css';

const AddItemModal = ({ isOpen, onClose, addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [category, setCategory] = useState('');
  const [model, setModel] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, description, price: parseFloat(price), currency, category, model, rating });
    onClose();
    setName('');
    setDescription('');
    setPrice('');
    setCurrency('USD');
    setCategory('');
    setModel('');
    setRating(0);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Item</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Moeda:
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BRL">BRL</option>
              {/* Adicione mais opções de moeda conforme necessário */}
            </select>
          </label>
          <label>
            Categoria:
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label>
            Modelo:
            <input
              type="text"
              placeholder="Modelo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
          <label>
            Avaliação (0-5):
            <StarRating rating={rating} onChange={setRating} />
          </label>
          <div className='btns'>
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddItemModal;
