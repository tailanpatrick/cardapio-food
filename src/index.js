import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes.js';
import './style/global.css';
import './style/responsivo.css';
import { CartProvider } from './contexts/cart-context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider>
        <Rotas/>
    </CartProvider>
    
);
