
import { AppLayout } from './layouts/AppLayout'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </AppLayout>
  )
}

export default App
