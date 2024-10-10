import './App.css';
import StyledComponent from './StyledComponent';
import {  ColorProvider } from './ColorContext';

function App() {
  return (
    <div className="App">
     <ColorProvider>
     <StyledComponent/>
     </ColorProvider>
    </div>
  );
}

export default App;
