import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {PostCard} from '.'
import { PostCardMock } from './mock'

const props = PostCardMock

describe('<PostCard/>', ()=>{
  it('should render PostCard correctly', ()=>{
    render(<PostCard {...props}/>);
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', {name: /title 1/i})).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });
  //para criar um snapshot
  it('should match snapshot', ()=>{
    const {container}=render(<PostCard {...props}/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});