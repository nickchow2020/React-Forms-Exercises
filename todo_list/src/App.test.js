import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

test("should it match snapshot", ()=>{
  const {asFragment} = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})


test("should it have content Add New Todo",()=>{
  const {getByText} = render(<App />)

  expect(getByText("Add New Todo")).toBeInTheDocument()
})

test("should add button exist",()=>{
  const {getByTestId} = render(<App />)

  expect(getByTestId("addTodo")).toBeInTheDocument()
})