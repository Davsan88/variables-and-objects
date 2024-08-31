import React from 'react';

function VariableDisplay() {
    // Create different type if variables
    let strVar = 'Hello There';
    let numVar = 9;
    let booVar = true;
    let arrVar = ['prequels', 'originals', 'sequels'];
    let objVar = { name: 'Obiwan', age: '40', role: 'Jedi Master' };

    // Conditional statement to chage the value of one of the variables
    if (Math.random() >= 0.5) {
        let strVar = 'Captain Kenobi!';
    }

}



export default VariableDisplay;