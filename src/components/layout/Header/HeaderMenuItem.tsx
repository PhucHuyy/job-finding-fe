import React from 'react';

import { MegaMenu } from 'primereact/megamenu';
import { items } from '../../../data/headerData'; // Adjust the import path as necessary
export default function HeaderMenuItem() {
  return (
    <div className="card">
      <MegaMenu model={items} breakpoint="960px" className="bg-custom-gray" />
    </div>
  );
}
