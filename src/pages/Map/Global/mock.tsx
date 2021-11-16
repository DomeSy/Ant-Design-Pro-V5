import React, { useEffect, useState } from 'react';
import { Map } from 'react-amap';

const Mock: React.FC<any> = () => {

  return (
    <div style={{width: '100%', height: '400px'}}>
      <Map amapkey={'788e08def03f95c670944fe2c78fa76f'}/>
    </div>
  );
};

export default Mock
