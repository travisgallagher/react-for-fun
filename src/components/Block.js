// Component always starts with capital
import React from 'react'

function Block(props) {

    // const propsExample = (param) => {
    //     return param
    // }
    
console.log(props.name)

    return (
    <div>Block {props.name}</div>
    )
}

export default Block