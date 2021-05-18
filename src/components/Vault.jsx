import React from 'react';
import Button from './Button';

const Vault = () => {

    return (
        <>
            <p>
                You found the password! Nice hacking! Now all you have to do is type the password in the vault's keyboard. Click below on the correct numbers, in the correct order to open the vault!
            </p>
            <Button number='3' />
            <Button number='7' />
            <Button number='0' />
            <Button number='1' />
            <Button number='6' />
            <Button number='4' />
        </>
    )
}

export default Vault;