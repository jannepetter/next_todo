import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoForm from "@components/TodoForm"



describe('Todos', () => {
    it('Renders form', () => {
        const mockHandleSubmit = jest.fn()
        const { container, debug } = render(<TodoForm onSubmit={mockHandleSubmit} />)
        // debug();

        const titlebox = screen.getByRole("textbox", { selector: "textarea" })
        expect(titlebox).toBeInTheDocument()

        fireEvent.change(titlebox, { target: { value: 'Test title for todo' } });
        fireEvent.click(screen.getByText('Submit'));
        expect(mockHandleSubmit).toHaveBeenCalledWith({ "completed": false, "id": undefined, "title": "Test title for todo" });
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);

        const checked = screen.getByRole("checkbox", { selector: "input" })
        expect(checked).toBeInTheDocument()
        fireEvent.click(checked)

        fireEvent.click(screen.getByText('Submit'));
        expect(mockHandleSubmit).toHaveBeenCalledWith({ "completed": true, "id": undefined, "title": "Test title for todo" });
        expect(mockHandleSubmit).toHaveBeenCalledTimes(2);

    })

})