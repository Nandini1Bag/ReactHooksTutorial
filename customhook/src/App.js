import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTitleone from './components/DocTitleone';
import DocTitletwo from './components/DocTitletwo';
import Formuser from './components/Formuser';

function App() {
  return (
    <div className="App">
     <DocTitleone/>
     <DocTitletwo/>
     <CounterOne/>
     <CounterTwo/>
     <Formuser/>
    </div>
  );
}

export default App;
