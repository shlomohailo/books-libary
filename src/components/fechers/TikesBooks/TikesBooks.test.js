import { screen,render } from '@testing-library/react';
import TikesBooks from './TikesBooks';


describe("test screen booksTikes component", () => {
    test("test on load component", () => {
        render(<TikesBooks />)
        const testComponent = screen.getByText("TikesBooks")
        expect(testComponent).toBeInTheDocument();
    })
    test("test class booksTikes name element", () => {
        render(<TikesBooks />)
        const testClassElement = screen.getByText("TikesBooks")
        expect(testClassElement).toHaveClass("h1-TikesBooks")
      })
      test("test color booksTikes text", () => {
        render(<TikesBooks />)
        const testColor = screen.getByText("TikesBooks")
        expect(testColor).toHaveStyle("background-color: 'rgb(185, 35, 35)'")
    
      })
    
})