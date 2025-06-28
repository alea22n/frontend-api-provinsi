import React from 'react';

function ProvinceItem({ name }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      marginBottom: '10px',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <p>{name}</p>
    </div>
  );
}

export default ProvinceItem;
