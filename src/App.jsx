
import { AppLayout } from './layouts/AppLayout'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';
import { Products } from './pages/Products';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </AppLayout>
  )
}

export default App
