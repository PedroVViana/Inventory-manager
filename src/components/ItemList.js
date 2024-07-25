import React from 'react';
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import './ItemList.css';

const currencies = {
  BRL: { symbol: 'R$', locale: 'pt-BR' },
  USD: { symbol: '$', locale: 'en-US' },
  EUR: { symbol: '€', locale: 'de-DE' }
};

const ItemList = ({ items, openViewItemModal, openEditItemModal, deleteItem }) => {
  const formatCurrency = (price, currency) => {
    const { locale, symbol } = currencies[currency];
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol'
    }).format(price);
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <p><strong>Nome:</strong> {item.name}</p>
          <p><strong>Preço:</strong> {formatCurrency(item.price, item.currency)}</p>
          <p><strong>Categoria:</strong> {item.category}</p>
          <p><strong>Modelo:</strong> {item.model}</p>
          <div className="item-actions">
            <button onClick={() => openViewItemModal(item)}>
              <AiOutlineEye /> Ver Detalhes
            </button>
            <button onClick={() => openEditItemModal(item)}>
              <AiOutlineEdit /> Editar
            </button>
            <button onClick={() => deleteItem(item.id)}>
              <AiOutlineDelete /> Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
