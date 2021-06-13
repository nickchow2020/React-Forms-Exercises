import { getByTestId, render} from '@testing-library/react';
import BoxList from './BoxList';


test("should render BoxList",()=>{
    render(<BoxList />)
})


test("should match snapshot",()=>{
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})


test("should display form",()=>{
    const {getByText} = render(<BoxList />)
    expect(getByText('Add New Box')).toBeInTheDocument()
})