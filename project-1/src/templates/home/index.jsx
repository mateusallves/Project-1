//import logo from './logo.svg';
import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Buttons';
import { InputText } from '../../components/TextInput';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPages: 30,
    searchValue:''
  }


  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const {page, postsPerPages} = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({
       posts: postsAndPhotos.slice(page,postsPerPages),
       allPosts: postsAndPhotos
       });
  }

  loadMorePosts = () =>{
    const {
      page,
      postsPerPages,
      allPosts,
      posts
    } = this.state;
    const nextPage = page +postsPerPages;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages)
    posts.push(...nextPosts);
    
    this.setState({posts, page: nextPage});
  }

  handleChange = (e) =>{
    const { value} = e.target
    this.setState({searchValue: value})
  }

  render() {
    const { posts, page, allPosts, postsPerPages, searchValue } = this.state;
    const noMorePosts = page + postsPerPages >=allPosts.length;

     const filterPosts = !!searchValue ? 
     allPosts.filter(post =>{
       return post.title.toLowerCase().includes(searchValue.toLowerCase());
     })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
        {!!searchValue &&(
          <h1> Search: {searchValue}</h1>
        )}

        <InputText searchValue={searchValue}
        handleChange={this.handleChange}/>
        </div>
        
        {filterPosts.length >0 && (
          <Posts posts={filterPosts} />
        )}
        {filterPosts.length ===0 && (
          <p>Não existem posts </p>
        )}
        
        <div className="button-container">
          {!searchValue &&(
            <Button text="abc" 
            onClick = {this.loadMorePosts}
            disabled ={noMorePosts}/>

          )}
        </div>
      </section>
    );
  }
}

export default Home;