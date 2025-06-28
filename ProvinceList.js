import React, { useEffect, useState } from 'react';
import ProvinceItem from './ProvinceItem';
import provincesData from '../data/provinces.json'; // import lokal

function ProvinceList() {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    // langsung gunakan data lokal
    setProvinces(provincesData);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {provinces.length === 0 ? (
        <p>Memuat data provinsi...</p>
      ) : (
        provinces.map((prov) => (
          <ProvinceItem key={prov.id} name={prov.nama} />
        ))
      )}
    </div>
  );
}

export default ProvinceList;
