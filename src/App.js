import logo from './logo.svg';
import './App.css';
import Hello from './slot3/DemoProp';
import DemoState from './slot3/DemoState';
import Counter from './slot3/DemoClass';
import { Button } from 'bootstrap';

function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="App">
      <Hello name="Thang" age={25} onClick={handleClick} />
      <Counter />
      <Button/>
    </div>
  );
}

export default App;
