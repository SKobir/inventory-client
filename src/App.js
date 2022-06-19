import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import AddBike from './Pages/Home/AddBike/AddBike';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import ManageBikes from './Pages/ManageBikes/ManageBikes';
import Myitems from './Pages/MyItems/Myitems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Update from './Pages/Update/Update';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';
import RequireAuth from './Pages/User/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/bike/:bikeId' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='/addbike' element={<AddBike></AddBike>}></Route>
        <Route path='/invent' element={<Inventory></Inventory>}></Route>
        <Route path='/myItems' element={<Myitems></Myitems>}></Route>
        <Route path='/manage' element={<ManageBikes></ManageBikes>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
