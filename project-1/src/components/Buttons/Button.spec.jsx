/* eslint-disable no-undef */
import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom'
import {Button} from '.'

describe('<Button />', ()=>{
  
  it('should render the button with text "Load more"', ()=>{
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} onClick={fn}/>) 
    const button = screen.getByRole('button', {name: /load more/i });  
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () =>{
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn}/>);
    
    
    const button = screen.getByRole('button', {name: /load more/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1)
  });

  it('should be disable when disable is true', () =>{
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} onClick={fn}/>);
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeDisabled()
  });

  it('should be enabled when disabled is false', () =>{
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} onClick={fn}/>) 
    const button = screen.getByRole('button', {name: /load more/i }); 
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () =>{
    const fn = jest.fn
   const {container}= render(<Button text="Load More" disabled={false} onClick={fn}/>);

   expect(container.firstChild).toMatchSnapshot();
 });
});