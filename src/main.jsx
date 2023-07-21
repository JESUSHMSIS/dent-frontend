import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';


import Modal from 'react-modal';
import App from './App';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
   <BrowserRouter> 
        <App />
   </BrowserRouter>
    
);

