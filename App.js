import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Greet from './component/Greet';
import { Jully } from './component/Jully';
import ClassState from './component/ClassState'
import UseState from './component/UseState';
import UseState1 from './component/UseState1';

function App() {
  return (
    <div className="App">
  <Welcome name="kumar" salary="2500" > hiiii  </Welcome>
  <Welcome name="sub" salary="200"> Helloooooo </Welcome>
  <Greet name="huehue" salary="45"/>
  <Jully name="julliii"> <button>ashgdghfi</button> </Jully>
  <ClassState />
  <UseState/>
  <UseState1/>
    </div>
  );
}

export default App;
