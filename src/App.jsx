import ProductList from './pages/ProductList';
import './bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/header';
function App() {
  return (

    <>
      <div>
        <Header />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}

export default App;
