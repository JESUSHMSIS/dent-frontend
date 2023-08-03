import { Routes, Route, Navigate } from "react-router-dom";
import { HomeRouter, AdminRouter } from "./routes";
import './styles/msg.css';
import './styles/buttons.css';
import './styles/inputs.css';
function App() {
  return (
    <Routes>
      {/* La ruta de home */}
      <Route path='/home/*' element={<HomeRouter />} />
      <Route path='/user/admin/*' element={<AdminRouter />} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
}

export default App;
