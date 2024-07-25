import React, { useState } from 'react';
import AddItemModal from './components/AddItemModal';
import EditItemModal from './components/EditItemModal';
import ItemList from './components/ItemList';
import ViewItemModal from './components/ViewItemModal';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const openAddItemModal = () => {
    setIsAddItemModalOpen(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModalOpen(false);
  };

  const openEditItemModal = (item) => {
    setCurrentItem(item);
    setIsEditItemModalOpen(true);
  };

  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  const openViewItemModal = (item) => {
    setCurrentItem(item);
    setIsViewItemModalOpen(true);
  };

  const closeViewItemModal = () => {
    setIsViewItemModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Inventário</h1>
        <button className='btnAdd' onClick={openAddItemModal}>Adicionar Item</button>
      </header>
      <ItemList
        items={items}
        openViewItemModal={openViewItemModal}
        openEditItemModal={openEditItemModal}
        deleteItem={deleteItem}
      />
      <AddItemModal
        isOpen={isAddItemModalOpen}
        onClose={closeAddItemModal}
        addItem={addItem}
      />
      {currentItem && (
        <EditItemModal
          item={currentItem}
          isOpen={isEditItemModalOpen}
          onClose={closeEditItemModal}
          onUpdate={updateItem}
        />
      )}
      {currentItem && (
        <ViewItemModal
          item={currentItem}
          isOpen={isViewItemModalOpen}
          onClose={closeViewItemModal}
          openEditItemModal={openEditItemModal}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );
}

export default App;
