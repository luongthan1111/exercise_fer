import logo from './logo.svg';
import './App.css';
import Hello from './slot3/DemoProp';



function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="App">
      <Hello name="Thang" age={25} onClick={handleClick} />
    </div>
  );
}

export default App;
