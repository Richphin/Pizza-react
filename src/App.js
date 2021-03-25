import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Slider from './Slider'
import About from "./About"
import Types from "./Types"
import Footer from './Footer';
import { Component } from "react";

// function App() {
//   return (
  //  <div>
  //    <Navbar/>
  //    <Slider/>
  //    <About/>
  //    <Types/>
  //    <Footer/>
  //  </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div>
      <Navbar/>
      <Slider/>
      <About/>
      <Types/>
      <Footer/>
    </div>
    )
  }
}
export default App;
