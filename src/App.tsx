import './App.css';
import { Button } from 'primereact/button';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button label="Primary" />
      <Button label="Help" severity="help" />
    </>
  );
}

export default App;
