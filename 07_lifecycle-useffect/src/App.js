

import { useState } from 'react';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectHook from './components/UseEffectHook';

function App() {

  const [sichtbar, setSichtbar]= useState(true)

  return (
    <div className="container text-center mt-4">
    <button className='btn btn-danger' onClick={()=> setSichtbar(!sichtbar)}>{sichtbar ? "Ausblenden" : "Anzeigen"}</button>
      {/* {sichtbar && <LifeCycleMethods/>} */}

      {sichtbar && <UseEffectHook/>}

      
    </div>
  );
}

export default App;
