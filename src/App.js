import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import {projects} from "./data"

function App() {
  return (
    <>
      <Header data={projects}/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
