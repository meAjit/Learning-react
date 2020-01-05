import React from 'react';
import ReactDOM from 'react-dom';

//this method of defining props can also be destructure and jshown below
//const Hello = (props) => {
    // const name = props.name
    // const age = props.age

    //above variable assigning can also be done as
    //const {name, age} = props

//or Destructuring props
const Hello = ({name, age}) => {



    /* const bornyear = () => {                        //This is an example of component
        const yearNow = new Date().getFullYear()    //helper function, which is similar to 
        return yearNow - props.age                  // defining function within a function
    } */

    // this function can also be define as
    const bornyear = () => new Date().getFullYear() - age


    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
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