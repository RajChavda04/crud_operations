
import './App.css';
import {Routes,Route} from 'react-router-dom'
import User from './Pages/User';
import UserCreate from './Pages/UserCreate';
import UserUpdate from './Pages/UserUpdate';
import Navbar from './components/Navbar';
import { UserProvider} from "./context/UserContext";
import { ProductProvider} from "./context/ProductContext";
import Product from './Pages/Product';
import ProductCreate from './Pages/ProductCreate';
import ProductUpdate from './Pages/ProductUpdate';
import Eg from './Pages/Eg';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <UserProvider>
      <ProductProvider>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<User></User>}></Route>
      <Route path="/UserCreate" element={<UserCreate></UserCreate>}></Route>
      <Route path="/UserUpdate/:id" element={<UserUpdate></UserUpdate>}></Route>
      <Route path="/Product" element={<Product></Product>}></Route>
      <Route path="/ProductCreate" element={<ProductCreate></ProductCreate>}></Route>
      <Route path="/ProductUpdate/:id" element={<ProductUpdate></ProductUpdate>}></Route>
      <Route path="/Eg/" element={<Eg></Eg>}></Route>
    </Routes>
    <Footer></Footer>
    </ProductProvider>
    </UserProvider>
     
    </>
  );
}

export default App;
