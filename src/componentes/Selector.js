import React, { forwardRef, useState } from 'react';

const Selector = forwardRef((props, ref) => {

  const [valor,setValor] = useState(0);

  const getInformation = () => {
    console.log("get")
    const ret = {
      id: props.id ,
      cantidad: valor
    }
    return ret;
  };

  // Asigna la referencia al componente hijo
  ref.current = {
    getInformation: getInformation
  };

  function add(){
    setValor(valor + 1);
  }

  function sub(){
    setValor(valor - 1);
  }

  return (
<div>
      <div className="custom-number-input h-10 w-10">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={sub}
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          
          <input className="text-center bg-white text-md"  value={valor} readOnly></input>
          <button
            onClick={add}
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Selector;
