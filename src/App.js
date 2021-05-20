import './App.css';
import Introduction from './components/Introduction';
import Password from './components/Password';
import Vault from './components/Vault';

function App() {

  const changeDisplay = (idToNone, idToBlock) => {
    document.getElementById(idToNone).style.display = 'none';
    document.getElementById(idToBlock).style.display = 'block';
  }

  const validationChallenge1 = () => {
    const alarmCode = document.getElementById('inspect-input').value;
    if (alarmCode === 'ALIENS_ROCK!!') {
      changeDisplay('challenge1', 'challenge2')
    } else {
      alert('Sorry, you have the wrong code. Alarm not disabled!')
    }
  }

  return (
    <>
      <div id='intro'>
        <Introduction />
        <button id='intro-button' onClick={() => {changeDisplay('intro', 'challenge1')}}>Let's do it!</button>
      </div>
      
      <div id='challenge1'>
        <p id='inspect-p'>
          First, you need to find the code to disable the alarm of the vault. To find the alarm's code, you need to Hack and <strong>inspect</strong> the hell out of this vault! Find the code and type below.
        </p>
        <label id='inspect-label' for='inspect-code'>Type here the alarm code:</label>
        <input id='inspect-input' type='text'></input>
        <button onClick={() => {validationChallenge1()}}>DISABLE ALARM</button>
      </div>

      <div id='challenge2'>
        <Password />
        <button onClick={() => {changeDisplay('challenge2', 'challenge3')}}>I have the password!</button>
      </div>
      
      <div id='challenge3'>
        <Vault />
      </div>
      
    </>
  );
}

export default App;
