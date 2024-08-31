import React from 'react';

function VariableDisplay() {
    // Create different type if variables
    let strVar = 'Hello There';
    let numVar = 9;
    let booVar = true;
    let arrVar = ['The Prequels', 'The Originals', 'The Sequels'];
    let objVar = { name: 'Obiwan', age: '40', role: 'Jedi Master' };

    // Conditional statement to chage the value of one of the variables
    if (Math.random() >= 0.5) {
        strVar = 'Captain Kenobi!';
    }

    return (
        <div>
            <p>Obiwan most famous quote: {strVar}</p>
            <p>Number of movies: {numVar}</p>
            <SimpleList items={arrVar} />
            {/* <p>Name of the trilogies: {arrVar.join(', ')}</p> Join with space */}
            <p>Name: {objVar.name}, Age: {objVar.age}, Role: {objVar.role}</p>
            <p>{booVar}</p>
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