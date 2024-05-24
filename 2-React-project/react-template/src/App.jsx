import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Recipe from "./components/Recipe";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import LogOntoConsole from "./components/LogOntoConsole";
import Die from "./components/Die";
import CounterImproved from "./components/CountImproved";
import Form from "./components/Form";


function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile name="Duck" job="Software Engineer" birthdate="39 June 2089"/>
      <Product product_name="Air Fryer K200"
                description="The best air fryer to fry all things, even Mars bars" 
                price={2000}/>
      <Product product_name="CHips" 
                description="Best chip ever" 
                price={2000}/>
      <Recipe title="make some toast" type="food" duration="2"/>
      <Counter></Counter>
      <ClickListener/>
      <LogOntoConsole/>
      <Die/>
      <CounterImproved/>
      <Form/>
    </>
  );
}

export default App;
