
import React from 'react';
import { Layout } from '../views/Layout';
import { Accounts } from '../views/admin/pages/Accounts';

import { Route, Routes } from "react-router-dom";

import "../styles/Dashboard.css";

export const AdminRouter = () => {

  const path_admin = 'user/admin/';

  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path='/' element={<Accounts />} /> */}
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/otro' element={<div className='cardBox'><h1>OTRO</h1></div>} />
        </Routes>
      </Layout>
    </>
  )
}
