import React from "react";
import Extras from "../Extras";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

export default function CuadroCompra(){


    return(
        <div>
            <button as={Link} to="/extras" className="bg-transparent hover:bg-gray-50 text-gray-50 font-semibold hover:text-gray-50 py-2 px-4 border border-gray-50 hover:border-transparent rounded">
                Comprar entraditas
            </button>
        </div>
    );
}