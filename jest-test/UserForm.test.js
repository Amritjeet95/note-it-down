import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
    //Render the component in the testing environment
     render(<UserForm />)

     //Check if the input fields are present
     const inputs = screen.getAllByRole('textbox');
     const button = screen.getByRole('button');

     //Assert (Make sure, expectations) that the input fields and button are present

     expect(inputs).toHaveLength(2);
     expect(button).toBeInTheDocument();
})