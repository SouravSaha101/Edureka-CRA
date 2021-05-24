import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routers from "./router/Routers";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routers} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
