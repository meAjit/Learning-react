import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const obj1 = {
        name : 'Harke',
        age : 35,
        education: 'PhD'
    }

    const fieldname = 'age'

    return(
        <div>
            <p>Greetings</p>
            <Hello name="Ram Bahadur" age = {20+2} />
            <Hello name={obj1.name} age={obj1[fieldname]}  />
        </div>
    ) 
}

ReactDOM.render(<App />, document.getElementById('root'))