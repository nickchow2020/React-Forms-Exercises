import { render,fireEvent} from '@testing-library/react';
import Todo from './Todo';

test("should it render",()=>{
    render(<Todo />)
})

test("should it match snapshot",()=>{
    const {asFragment} = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
})

test("should having content",()=>{
    const {getByText} = render(<Todo todo="gym"/>)
    expect(getByText("gym")).toBeInTheDocument()
})

test("should having delete btn",()=>{
    const {getByText} = render(<Todo todo="gym"/>)
    expect(getByText("X")).toBeInTheDocument()
})