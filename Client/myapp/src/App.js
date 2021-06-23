import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Cactus from "./components/Cactus";
import Zacate from "./components/Zacate";
import Limon from "./components/Limon";
import Flor from "./components/Flores";
import Arbol from "./components/Arbol";
import Gerbera from "./components/Gerbera";
import Hiervabuena from "./components/Cannabis";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex-container">
          <Sidebar />
          <div className="flex-container-content">
            <Switch>
              <Route path="/cactus">
                <Cactus />
              </Route>
              <Route path="/zacate">
                <Zacate />
              </Route>
              <Route path="/hiervabuena">
                <Hiervabuena />
              </Route>
              <Route path="/limon">
                <Limon />
              </Route>
              <Route path="/flor">
                <Flor />
              </Route>
              <Route path="/arbol">
                <Arbol />
              </Route>
              <Route path="/gerbera">
                <Gerbera />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
