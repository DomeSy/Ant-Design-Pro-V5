import React, { useEffect, useState } from 'react';

import { Map } from '@/components'

const Mock: React.FC<any> = () => {

  return (
    <div style={{width: '100%', height: '600px'}}>
      <Map.Province init={[320000]} />
    </div>
  );
};

export default Mock
