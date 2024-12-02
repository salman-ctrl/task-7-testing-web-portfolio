var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'; // Make sure the path is correct
// Mock the useNavigate hook from react-router-dom
jest.mock('react-router-dom', function () { return (__assign(__assign({}, jest.requireActual('react-router-dom')), { useNavigate: jest.fn() })); });
describe('Navbar', function () {
    it('navigates to "/hire" when the "Hire Me!" button is clicked', function () {
        var navigate = jest.fn(); // create the mock function
        // Ensure that useNavigate returns the mocked navigate function
        require('react-router-dom').useNavigate.mockReturnValue(navigate);
        // Wrap the Navbar in a Router to simulate routing behavior
        render(_jsx(Router, { children: _jsx(Navbar, {}) }));
        // Get the "Hire Me!" button
        var hireButton = screen.getByText('Hire Me!');
        // Simulate a click event on the button
        fireEvent.click(hireButton);
        // Check if navigate function was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/hire');
    });
});
