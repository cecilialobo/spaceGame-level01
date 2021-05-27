import './App.css';
import Introduction from './components/Introduction/Introduction';
import MemoryGame from './components/MemoryGame';
import Keyboard from './components/Keyboard';

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
        <button className='button' onClick={() => { changeDisplay('intro', 'challenge1') }}>LET'S DO IT!</button>
      </div>

      <div id='challenge1'>
        <p id='inspect-p'>
          First, you need to find the code to disable the alarm of the vault. To find the alarm's code, you need to Hack and <strong>inspect</strong> the hell out of this vault! Find the code and type below.
        </p>
        <label id='inspect-label' htmlFor='inspect-code'>Type here the alarm code:</label>
        <input id='inspect-input' type='text'></input>
        <button className='button' onClick={() => { validationChallenge1() }}>DISABLE ALARM</button>
      </div>

      <div id='challenge2'>
        <p className='password-p'>Amazing! You found the code and now the alarm is disabled. 
        <br/>
        The next task in this mission is to find the password to open the vault. 
        <br/>
        To find the password, you will need to hack the vault system. To make it harder, the aliens have a firewall memory card game. Only one card is unique and it contains the password. Finish the game and find the card!</p>
        <p id='password-sub'>Don't forget to memorize the number, you will need it later! </p>
        <MemoryGame />
        <button className='button' onClick={() => { changeDisplay('challenge2', 'challenge3') }}>I HAVE THE PASSWORD</button>
      </div>

      <div id='challenge3'>
        <p className='password-p'>
        Nice hacking so far! Now for the final mission, let's see if you have the correct password! All you have to do to open the vault is to type the password in the vault's keyboard. Click below on the correct numbers, in the correct order to open the vault!
        </p>
        <Keyboard />
      </div>

    </>
  );
}

export default App;
