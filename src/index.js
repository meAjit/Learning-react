import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    const bornyear = () => {                        //This is an example of component
        const yearNow = new Date().getFullYear()    //helper functionm
        return yearNow - props.age
    }
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
            <p>So you were probably born in {bornyear()}</p>
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