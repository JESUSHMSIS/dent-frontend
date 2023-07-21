
import { Layout } from '../views/Layout';

import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";

export const AdminRouter = () => {

1
  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path='/' element={<Accounts />} /> */}
          <Route path='/otro' element={<div className='cardBox'><h1>OTRO</h1></div>} />
        </Routes>
      </Layout>
    </>
  )
}
