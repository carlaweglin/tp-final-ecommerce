
import { AppLayout } from './layouts/AppLayout'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Register } from "./pages/Register";
import { Checkout } from './pages/Checkout';
import { ProtectedRoutCheckout } from './components/ProtectedRoutCheckout';
import { Cart } from './components/Cart';


function App() {

  

  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error404/>} />
        <Route path='/checkout' element={<ProtectedRoutCheckout><Checkout/></ProtectedRoutCheckout>}/>
      </Routes>
    </AppLayout>
  )
}

export default App
