import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from 'react-redux';
import {store} from './store';
import Modal from 'react-modal';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
   <BrowserRouter> 
      <Provider store={store}>
         <App />
         <ToastContainer />
      </Provider>
   </BrowserRouter>
    
);

