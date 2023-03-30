import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ClientHeader from '../components/clientHeader';
import ProductsTable from '../components/productsTable';

function Shopping() {
  return (
    <div>
      <ClientHeader />
      <ProductsTable />
    </div>
  );
}

export default Shopping;
