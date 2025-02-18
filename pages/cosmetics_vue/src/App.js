import Header from './components/header/Header';
import FixedMenu from './components/fixed_menu/FixedMenu'
import Container from './components/container/Container';
import Product from './components/product/Product';
import ProductJson from './json/product.json';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';
import { useRef } from 'react';

function App() {
  const topRef = useRef(null);
  const scrollToTop = () =>{
    if(topRef.current){
      topRef.current.scrollIntoView({behavior : "smooth"})
    }
  }
  return (
    <div className="App" ref={topRef}>
      <Header/>
      <FixedMenu scrollToTop={scrollToTop}/>
      <Container/>
      <div className='ProductFlex'>
        <Product ProductJson={ProductJson}/>
      </div>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
