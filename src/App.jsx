
import {HomeRouter, AdminRouter} from './routes';
import { Navigate, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Routes>
      {/* La ruta de home */}
      <Route path='/home/*' element={<HomeRouter />} />
      
      {/* Las rutas del admin*/}
      <Route path='/user/admin/*' element={<AdminRouter />} />

      {/* La ruta por default */}
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  )
}

export default App
