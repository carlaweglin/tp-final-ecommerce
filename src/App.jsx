
import { AppLayout } from './layouts/AppLayout'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </AppLayout>
  )
}

export default App
