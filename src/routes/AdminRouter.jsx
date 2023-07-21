
import React from 'react';
import { Layout } from '../views/Layout';
import { AccountsView } from '../views/admin/pages/module.users/accounts'
import { Route, Routes} from "react-router-dom";

import "../styles/Dashboard.css";

export const AdminRouter = () => {

  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path='/' element={<Accounts />} /> */}
          <Route path='/accounts' element={<AccountsView />} />
          <Route path='/otro' element={<div className='cardBox'><h1>OTRO</h1></div>} />
        </Routes>
      </Layout>
    </>
  )
}
