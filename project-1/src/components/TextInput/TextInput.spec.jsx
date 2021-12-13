import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import {InputText} from '.'


describe('<Posts/>',()=>{
  it('should have a value of search value', ()=>{
    const fn = jest.fn()
    render(<InputText handleChange={fn} searchValue={'testando'}/>);
    const input = screen.getByPlaceholderText(/Type your search/i)
    expect(input.value).toBe('testando');
  });
  it('should call handleChange on each key pressed', ()=>{
    const fn = jest.fn()
    render(<InputText handleChange={fn}/>);
    const input = screen.getByPlaceholderText(/Type your search/i);
    const value = 'o valor';

   userEvent.type(input, value);
   expect(input.value).toBe(value);
   expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match snapshot', ()=>{
    const fn = jest.fn
    const {container}=render(<InputText handleChange={fn}/>);
    expect(container).toMatchSnapshot();
  });

 }) ;



