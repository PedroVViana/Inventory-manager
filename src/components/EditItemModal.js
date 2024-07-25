import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';
import './Modal.css';

const EditItemModal = ({ isOpen, onClose, item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [currency, setCurrency] = useState(item.currency);
  const [category, setCategory] = useState(item.category);
  const [model, setModel] = useState(item.model);
  const [rating, setRating] = useState(item.rating);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...item, name, description, price: parseFloat(price), currency, category, model, rating });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="modal-overlay">
      <div className="modal-content">
        <h2>Editar Item</h2>
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
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditItemModal;
