import { render,fireEvent} from '@testing-library/react';
import App from './App';

test('should render', () => {
  render(<App />);
});


test("should match snapshot",()=>{
  const {asFragment} = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})



test("should start showing",()=>{
  const { getByText } = render(<App />)
  const heading = getByText('Add New Box')
  expect(heading).toBeInTheDocument()
})


test("should able to receive value",()=>{
  const {getByTestId} = render(<App />)

  const backgroundColorInput = getByTestId('color')
  const widthInput = getByTestId('width')
  const heightInput = getByTestId('height')

  fireEvent.change(backgroundColorInput,{target:{value:"tomato"}})
  fireEvent.change(widthInput,{target:{value:"50"}})
  fireEvent.change(heightInput,{target:{value:"50"}})

  expect(backgroundColorInput).toHaveValue("tomato")
  expect(widthInput).toHaveValue("50")
  expect(heightInput).toHaveValue("50")
})



test("should display box",()=>{
  const {getByTestId} = render(<App />)

  const button = getByTestId('submit')
  expect(button).toBeInTheDocument()  

  const backgroundColorInput = getByTestId('color')
  const widthInput = getByTestId('width')
  const heightInput = getByTestId('height')

  fireEvent.change(backgroundColorInput,{target:{value:"tomato"}})
  fireEvent.change(widthInput,{target:{value:"50"}})
  fireEvent.change(heightInput,{target:{value:"50"}})
  fireEvent.click(button);

  const removeBtn = getByTestId("remove")

  expect(removeBtn).toBeInTheDocument()
})


test("should able to delete box",()=>{
  const {getByTestId} = render(<App />)


  const button = getByTestId('submit')
  expect(button).toBeInTheDocument()  

  const backgroundColorInput = getByTestId('color')
  const widthInput = getByTestId('width')
  const heightInput = getByTestId('height')

  fireEvent.change(backgroundColorInput,{target:{value:"tomato"}})
  fireEvent.change(widthInput,{target:{value:"50"}})
  fireEvent.change(heightInput,{target:{value:"50"}})
  fireEvent.click(button);

  const removeBtn = getByTestId("remove")
  fireEvent.click(removeBtn)

  expect(removeBtn).not.toBeInTheDocument()
})