import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Store from "./page/Store";
import About from "./page/About";
import ContactUs from "./page/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/about" component={About} />
      <Route path="/contact-us" component={ContactUs} />
      <Footer />
    </Router>
  );
}

export default App;
