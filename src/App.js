import './App.css';
import Inspect from './components/Inspect';
import Introduction from './components/Introduction';
import Password from './components/Password';
import Vault from './components/Vault';

function App() {

  const changeDisplay = (idToNone, idToBlock ) => {
    document.getElementById(idToNone).style.display = 'none';
    document.getElementById(idToBlock).style.display = 'block';
  }

  return (
    <>
      <div id='intro'>
        <Introduction />
        <button id='introButton' onClick={() => {changeDisplay('intro', 'challenge1')}}>Let's do it!</button>
      </div>
      
      <div id='challenge1'>
        <Inspect />
        <input type='submit' value='DISABLE ALARM'></input>
      </div>

      <div id='challenge2'>
        <Password />
      </div>
      
      <div id='challenge3'>
        <Vault />
      </div>
      
    </>
  );
}

export default App;
