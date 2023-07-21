import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
   <BrowserRouter> 
        <App />
   </BrowserRouter>
    
);

