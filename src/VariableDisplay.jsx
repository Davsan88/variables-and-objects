import React from 'react';

// This function defines the VariableDisplay component, which renders various types of variables.
function VariableDisplay() {
     // Declaring different types of variables
    let strVar = 'Hello There';
    let numVar = 9;
    let booVar = true;
    let arrVar = ['The Prequels', 'The Originals', 'The Sequels'];
    let objVar = { name: 'Obiwan', age: '40', role: 'Jedi Master' };

     // Conditional statement to change the value of the string variable based on a random number
    if (Math.random() >= 0.5) {
        strVar = 'Captain Kenobi!';
    }

    // Returning JSX that displays the variables
    return (
        <div>
            <p>Obiwan most famous quote: {strVar}</p>
            <p>Number of movies: {numVar}</p>
            <SimpleList items={arrVar} />
            {/* <p>Name of the trilogies: {arrVar.join(', ')}</p> Join with space */}
            <p>Name: {objVar.name}, Age: {objVar.age}, Role: {objVar.role}</p>
            <p>{booVar.toString()}</p> {/* Converting the boolean to a string for display */}
        </div>
    );
}

function SimpleList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}



export default VariableDisplay;
export { SimpleList };