import React from 'react';
import './SearchModal.scss';
import { FaCross } from 'react-icons/fa';
import { CiSquareRemove } from "react-icons/ci";

const SearchModal = ({ onClose }) => {
  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <button className="btn-close d-flex" onClick={onClose} aria-label="Close">
            <CiSquareRemove className='btn-close' />
        </button>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search..." 
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchModal;
