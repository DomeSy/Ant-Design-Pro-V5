import React, { useEffect, useState } from 'react';

import { Map } from '@/components'

const Mock: React.FC<any> = () => {

  return (
    <div style={{width: '100%', height: '600px'}}>
      <Map.Province />
    </div>
  );
};

export default Mock
