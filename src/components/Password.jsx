import React from 'react';
import Card from './Card';

const Password = () => {
    return (
        <>
            <p>Amazing! You found the code and now the alarm is disabled. The next task in this mission is to find the password to open the vault.</p>
            <p>To find the password, you will need to hack the vault system. To make it harder, the aliens have a memory card game installed. Only one card is unique and it contains the password. You have 10 clicks to find the unique card, let's hack! </p>
            <p>Don't forget to memorize the number, you will need it later! </p>
            <div id='card-section'>
                <Card number='876345' />
                <Card number='647912' />
                <Card number='513864' />
                <Card number='876345' />
                <Card number='513864' />
                <Card number='134076' />
                <Card number='647912' />
            </div>
        </>
    )
}

export default Password;