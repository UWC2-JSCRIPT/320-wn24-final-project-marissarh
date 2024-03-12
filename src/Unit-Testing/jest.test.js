import {fireEvent, getByTestId, render, screen} from '@testing-library/react'
import NavBar from '../Navbar/NavBar'

test ('Clicking search button triggers action', () =>{
    const {getByTestId } = render(<NavBar/>);
    const searchButton = 'searchButton';
    const button = getByTestId(searchButton);
    fireEvent.click(button);
})



    