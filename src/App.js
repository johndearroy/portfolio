import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Hero from "./components/basic/Hero";
import Preloader from "./components/basic/preloader";
import BackToTopButton from "./components/basic/backToTop";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
      {/*<Preloader/>*/}
      <BackToTopButton/>
    </>
  );
}

export default App;
