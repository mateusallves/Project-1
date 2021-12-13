import { Component } from 'react';
import P from 'prop-types'
import {React} from 'react'
import './styles.css'


export class Button extends Component{
  render(){
    const {text, onClick,disabled = false}= this.props
    return <button onClick={onClick}
     className='button'
     disabled={disabled}>
      {text}
      </button>
  }
}


// Tipagem das props do componente
Button.defaultProps = {
  disabled:false,  
}
Button.propTypes ={
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled : P.bool.isRequired,
}