import { render} from '@testing-library/react';
import Box from './Box';


test("should render component",()=>{
    render(<Box />)
})


test("should match snapshot",()=>{
    const {asFragment} = render(<Box />)    
    expect(asFragment()).toMatchSnapshot()
})

test("should match snapshot with pros",()=>{
    const {asFragment} = render(<Box width="10" height="10" backgroundColor="tomato" id="100"/>)    
    expect(asFragment()).toMatchSnapshot()
})


test("should have remove button",()=>{
    const {getByTestId,getByText} = render(<Box width="10" height="10" backgroundColor="tomato" id="100"/>)    
    
    const removeBtn = getByTestId("remove")

    expect(removeBtn).toBeInTheDocument()
    expect(getByText("X")).toBeInTheDocument()
})


