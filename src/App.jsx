import ProductList from './pages/ProductList';
import './bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/header';
import SingleProduct from './pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/error/NotFound';
function App() {
  return (

    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
