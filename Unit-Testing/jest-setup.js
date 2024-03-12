import  '@testing-library/jest-dom'
import {  fireEvent,render } from '@testing-library/react'
import NavBar  from'../src/Navbar/NavBar'

describer('Button click triggers click event', ()=>{
    const testClick = jest.fn()
    render(<NavBar click={testClick} />);
    const button = getByRole('button', {name:metric}) 

    fireEvent.click(button);
    expect(handleClick).toBeCalled()
   
;    });
    