import AutoComplete from './components/AutoComplete.js';
import ClickToEdit from './components/ClickToEdit.js';
import Modal from './components/Modal.js';
import Tab from './components/Tab.js';
import Tag from './components/Tag.js';
import Toggle from './components/Toggle.js';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
