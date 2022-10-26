import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando' />
      <Mensaje color='red' message='En un curso'/>
      <Mensaje color='blue' message='De React'/>
    </div>
  );
}

export default App;