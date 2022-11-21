import './App.css';
import Checklist from './components/Checklist';
import PhoneNumberForm from './components/Uncontrolled-Component';
import AddRemoveList from './components/AddRemoveList/AddRemoveList';
import UpdateStateObject from './components/UpdateStateObject';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid red', margin: 10}}>
        <Checklist  />
      </div>
      <div style={{border: 'solid blue', margin: 10}}>
        <AddRemoveList />
      </div>
      <div style={{border: 'solid yellow', margin: 10}}>
        <PhoneNumberForm />
      </div>
      <div style={{border: 'solid green', margin: 10}}>
        <UpdateStateObject />
      </div>
      <div style={{border: 'solid pink', margin: 10}}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
