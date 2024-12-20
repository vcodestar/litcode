import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WriteUp() {
  const { label } = useParams(); 
  const [WriteUpComponent, setWriteUpComponent] = useState(null); 

  useEffect(() => {
    const writeups = import.meta.glob('/src/languages_menus/c_writeups/*.jsx'); 

    const path = `/src/languages_menus/c_writeups/${label}.jsx`; 

    if (writeups[path]) {
      writeups[path]().then((module) => {
        setWriteUpComponent(() => module.default); 
      });
    }
  }, [label]); 

  if (!WriteUpComponent) {
    return <div>Loading...</div>; 
  }

  return(
    <div>
      <header>
        <h1>{label.replace(/_/g, ' ').toUpperCase()}</h1>
      </header>
      <main>
        <WriteUpComponent />
      </main>
    </div>
  ); 
}

export default WriteUp;
