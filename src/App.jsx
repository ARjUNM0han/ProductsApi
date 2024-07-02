import ProductList from './pages/ProductList';
import './bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/header';
import SingleProduct from './pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (

    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
