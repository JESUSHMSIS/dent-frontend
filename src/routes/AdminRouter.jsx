
import { Layout } from '../views/Layout';
import { Route, Routes} from "react-router-dom";
import "../styles/Dashboard.css";


import { AccountsView } from '../views/admin/pages/module.users/accounts'
import GetUsers from '../views/admin/pages/module.users/users/GetUsers';

export const AdminRouter = () => {

  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path='/' element={<Accounts />} /> */}
          <Route path='/accounts' element={<AccountsView />} />
          <Route path='/users' element={<GetUsers/>} />
        </Routes>
      </Layout>
    </>
  )
}
