import { render,fireEvent, getByText} from '@testing-library/react';
import TodoList from './TodoList';

test("should it render",()=>{
    render(<TodoList />)
})

test("should it match it's snapshot",()=>{
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

test("should it add new todo",()=>{
    const {getByTestId,getByText} = render(<TodoList />)

    const todoInput = getByTestId("todo")
    const todoSumit = getByTestId("addTodo")

    fireEvent.change(todoInput,{target:{value:"doing homework"}})
    fireEvent.click(todoSumit)

    expect(getByText("doing homework")).toBeInTheDocument()
})



test("should it delete todo",()=>{
    const {getByTestId,getByText} = render(<TodoList />)

    const todoInput = getByTestId("todo")
    const todoSumit = getByTestId("addTodo")

    fireEvent.change(todoInput,{target:{value:"doing homework"}})
    fireEvent.click(todoSumit)

    const deleteButton = getByText("X")

    expect(deleteButton).toBeInTheDocument()

    fireEvent.click(deleteButton)

    expect(deleteButton).not.toBeInTheDocument()

})



