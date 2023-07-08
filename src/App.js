import Header from "./components/Header";
import Main from "./components/Main";
import {projects} from "./data"

function App() {
  return (
    <>
      <Header data={projects}/>
      <Main data={projects} />
    </>
  );
}

export default App;
