import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'; // Make sure the path is correct

// Mock the useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Navbar', () => {
    it('navigates to "/hire" when the "Hire Me!" button is clicked', () => {
        const navigate = jest.fn(); // create the mock function
        // Ensure that useNavigate returns the mocked navigate function
        require('react-router-dom').useNavigate.mockReturnValue(navigate);

        // Wrap the Navbar in a Router to simulate routing behavior
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Get the "Hire Me!" button
        const hireButton = screen.getByText('Hire Me!');

        // Simulate a click event on the button
        fireEvent.click(hireButton);

        // Check if navigate function was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/hire');
    });
});
