import {React} from 'react'
import P from 'prop-types'

import './styles.css'

export const InputText= ({searchValue, handleChange})=>{
return <input className='text-input'
value={searchValue}
onChange={handleChange}
type="search" 
placeholder='Type your Search'/>
}

InputText.propTypes ={
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}