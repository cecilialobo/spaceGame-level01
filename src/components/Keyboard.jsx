import React, {useState} from 'react';
import Button from './Button/Button';

const Keyboard = () => {

    const [password, setPassword] = useState('')

    const updatePassword = (number) => {
        setPassword(password + number);
    }

    
    const validationChallenge3 = (password) => {
        if (password === '134076') {
            alert('CONGRATS! You hacked the vault and recovered the lost GPS! Press ok to move forward to the next level and find more spaceship pieces!');
            setPassword('');
            //todo - function to move forward to next level
        } else {
            alert('Sorry, you have the wrong password. The vault was not hacked! Start again.');
            setPassword('');
            //todo - refresh
        }
    }

    return (
        <>
            <div className='btn-container'>
                <Button number='1' typedNumber={updatePassword}/>
                <Button number='2' typedNumber={updatePassword}/>
                <Button number='3' typedNumber={updatePassword}/>
            </div>

            <div className='btn-container'>
                <Button number='4' typedNumber={updatePassword}/>
                <Button number='5' typedNumber={updatePassword}/>
                <Button number='6' typedNumber={updatePassword}/>
            </div>

            <div className='btn-container'>
                <Button number='7' typedNumber={updatePassword}/>
                <Button number='8' typedNumber={updatePassword}/>
                <Button number='9' typedNumber={updatePassword}/>
            </div>
            <Button number='0' typedNumber={updatePassword}/>
            <button className='button' onClick={()=> {
                validationChallenge3(password)}}>OPEN THE VAULT</button>
        </>
    )
}

export default Keyboard;