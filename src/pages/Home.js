import React,{useEffect,useState} from 'react'
import { Card, LinearProgress } from '@material-ui/core';
import './Home.css';
import Table from "../components/Table"
import Post from "../components/Post"


function Home() {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const url = 'https://obscure-wildwood-66759.herokuapp.com/post';



    useEffect(() => {
        const getPost = async () => {
            try{
                await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  setPosts(data);
                  if(posts!=null){
                    setLoading(false);
                  }
                  setLoading(true);
                  console.log(data);
                });
            } catch(e){
                console.log(e);
            }
        }
        getPost();
      },[]);
    return (
        <div className='home'>
        
            <div className="home__body">
                <Card className="home__left">
                <h3>Eagle Scouts of Cebu<span><small className="reminder">    Scroll down to see more</small></span></h3>
                <small className="legend">MNHS - Marigondon, BgNHS - Babag, BkNHS - Bankal</small>
                <Table/>
                </Card>
                <Card className="home__right">
                {!loading?<LinearProgress /> : <>
                    {posts.slice(0).reverse().map(({title,description,url}) => (
                    <Post title={title} description={description} url={url}/>
                ))}
                 </>}
                </Card>
            </div>
        </div>
    )
}

export default Home
