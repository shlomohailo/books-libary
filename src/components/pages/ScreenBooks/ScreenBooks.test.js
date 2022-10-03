import { screen,render } from '@testing-library/react';

import ScreenBooks from '../ScreenBooks/ScreenBooks';

describe("test screen books component", () => {
    test("test on load component", () => {
        render(<ScreenBooks />)
        const testComponent = screen.getByText("ScreenBooks")
        expect(testComponent).toBeInTheDocument();
    })
    test("test class name element", () => {
        render(<ScreenBooks />)
        const testClassElement = screen.getByText("ScreenBooks")
        expect(testClassElement).toHaveClass("h1-screenBooks")
      })
      test("test color text", () => {
        render(<ScreenBooks />)
        const testColor = screen.getByText("ScreenBooks")
        expect(testColor).toHaveStyle("background-color: 'rgb(35, 35, 215)'")
    
      })
    
})