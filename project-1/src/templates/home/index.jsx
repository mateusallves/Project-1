//import logo from './logo.svg';
import { useEffect, useState, useCallback } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Buttons';
import { InputText } from '../../components/TextInput';

export const Home = ()=>{
    
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPages] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  
  const noMorePosts = page + postsPerPages >=allPosts.length;
  const filterPosts = !!searchValue ? 
     allPosts.filter(post =>{
       return post.title.toLowerCase().includes(searchValue.toLowerCase());
     })
      : posts;

      
      const handleLoadPosts = useCallback(async (page, postsPerPages) => {
        const postsAndPhotos = await loadPosts();
        setPosts(postsAndPhotos.slice(page,postsPerPages))
        setAllPosts(postsAndPhotos)
      },[])
      
      useEffect(()=>{
        handleLoadPosts(0, postsPerPages)
      },[handleLoadPosts, postsPerPages])

      const loadMorePosts = () =>{
        const nextPage = page +postsPerPages;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages)
        posts.push(...nextPosts);
        
        setPosts(posts)
        setPage(nextPage)

      }
    
    const handleChange = (e) =>{
        const { value} = e.target
        setSearchValue(value)
      }
  
    return (
      <section className="container">
        <div className="search-container">
        {!!searchValue &&(
          <h1> Search: {searchValue}</h1>
        )}

        <InputText searchValue={searchValue}
        handleChange={handleChange}/>
        </div>
        
        {filterPosts.length >0 && (
          <Posts posts={filterPosts} />
        )}
        {filterPosts.length ===0 && (
          <p>Não existem posts </p>
        )}
        
        <div className="button-container">
          {!searchValue &&(
            <Button text="Load More" 
            onClick = {loadMorePosts}
            disabled ={noMorePosts}/>

          )}
        </div>
      </section>
    );
}
 export default Home