import { getByTestId, render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test("should it render",()=>{
    render(<NewTodoForm />)
})

test("should it match with snapshot",()=>{
    const {asFragment} = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
})

test("should it having content add new form",()=>{
    const {getByText,getByTestId} = render(<NewTodoForm />)

    expect(getByText("Add New Todo")).toBeInTheDocument()
    expect(getByTestId("addTodo")).toBeInTheDocument()
})