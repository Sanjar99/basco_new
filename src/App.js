import About from "./Components/About/About";
import Advice from "./Components/Advice/Advice";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Statistics from "./Components/Statistica/Statistics";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Card />
      <Advice />
      <Statistics />
    </div>
  );
}

export default App;
