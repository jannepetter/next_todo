import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Todos from "@components/Todos"
import TodoItem from '@components/TodoItem'
import { useQuery } from '@tanstack/react-query'
import { configure, within } from '@testing-library/dom'
configure({ testIdAttribute: 'id' })
jest.mock("@tanstack/react-query")

const todos = [
    {
        "id": 1,
        "title": "some title",
        "completed": false
    },
    {
        "id": 2,
        "title": "another title",
        "completed": true
    },
]

describe('Todos', () => {
    it('Renders todos', () => {

        useQuery.mockReturnValue({
            isPending: false,
            isError: false,
            data: todos,
            error: null,
        });
        const { container, debug } = render(<Todos />)
        // debug();

        const titlespan = screen.getByText("some title", { selector: "span" })
        expect(titlespan).toHaveTextContent("some title")

        const titlespan2 = screen.getByText("another title", { selector: "span" })
        expect(titlespan2).toHaveTextContent("another title")

    })
    it("Renders loading", () => {
        useQuery.mockReturnValue({
            isPending: true,
            isError: false,
            data: todos,
            error: null,
        });

        render(<Todos />)

        const item = screen.getByTestId("loading-spinner")
        expect(item).toBeInTheDocument()

    })

    it("Renders error", () => {
        useQuery.mockReturnValue({
            isPending: false,
            isError: true,
            data: todos,
            error: "some error happened",
        });

        render(<Todos />)

        const item = screen.getByText("some error happened", { exact: false })
        expect(item).toBeInTheDocument()

    })

    it("Renders todo item", () => {
        const handleDeleteMock = jest.fn();

        render(<TodoItem data={todos[1]} onDelete={handleDeleteMock} />)

        const titlespan = screen.getByText("another title", { selector: "span" })
        expect(titlespan).toHaveTextContent("another title")

        const delBtn = screen.getByText("Delete")
        expect(delBtn).toBeInTheDocument()
        expect(handleDeleteMock).not.toHaveBeenCalled();
        fireEvent.click(delBtn)
        expect(handleDeleteMock).toHaveBeenCalled();

        const editBtn = screen.getByText("Edit")
        expect(editBtn).toBeInTheDocument()


    })



})