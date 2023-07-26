
import {Routes , Route, Navigate} from "react-router-dom"
import {HomeRouter , AdminRouter} from "./routes"


import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
      <Routes>
        {/* La ruta de home */}
        <Route path='/home/*' element={<HomeRouter />} />
        
        <Route path='/user/admin/*' element={<AdminRouter />} />

        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </Provider>
  )
}

export default App
