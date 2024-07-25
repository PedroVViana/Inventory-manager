import React from 'react';
import Modal from 'react-modal';
import { FaStar } from 'react-icons/fa';
import './Modal.css';

const ViewItemModal = ({ isOpen, onClose, item, openEditItemModal, deleteItem }) => {
  if (!item) return null;

  const { name, description, price, rating, currency, category, model } = item;

  const formattedPrice = currency ? 
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price) : 
    price;

  const handleEditClick = () => {
    openEditItemModal(item);
    onClose(); // Fecha a modal de ver detalhes
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="modal-overlay">
      <div className="modal-content">
        <h2>Detalhes do Item</h2>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>Descrição:</strong> {description}</p>
        <p><strong>Preço:</strong> {formattedPrice}</p>
        <p><strong>Categoria:</strong> {category}</p>
        <p><strong>Modelo:</strong> {model}</p>
        <p><strong>Avaliação:</strong> {[...Array(rating)].map((_, i) => <FaStar color='#ffd700' fontSize={14} key={i} />)}</p>
        <div className='btns'>
          <button onClick={onClose}>Fechar</button>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => deleteItem(item.id)}>Excluir</button>
        </div>
        
      </div>
    </Modal>
  );
};

export default ViewItemModal;
