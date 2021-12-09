 import './styles.css'

export const InputText= ({searchValue, handleChange})=>{
return <input className='text-input'
value={searchValue}
onChange={handleChange}
type="search" />
}