
import { AppLayout } from './layouts/AppLayout'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </AppLayout>
  )
}

export default App
