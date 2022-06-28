import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Landing from './components/Landing';
import CreateRecipe from './components/CreateRecipe';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/recipe"><CreateRecipe/></Route>
        <Route path="/home/:id"><Detail/></Route>
        {/* <Route exact path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/activity" element={<CreateRecipe/>} />
        <Route path="/home/:id" element={<Detail/>} /> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
