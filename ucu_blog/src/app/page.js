"use client";

import Title from "./components/Title.js"
import Content from  "./components/Content"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";


function Home (){

  const [showBlog, setShowBlog] = useState(false);
  const [randomText, setRandomText] = useState("No button has been clicked!");
  const[moviesData, setMoviesData] = useState([]);

  function changeBlogs(){
    setShowBlog(!showBlog);

    if (showBlog) {
      setRandomText("This is MUK")
    }else{
      setRandomText('This is UCU')
    }
  }



  async function fetchTopMovies (){
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '90165b2056msh5218e1ec6e762c2p1b30b0jsn0b7be9272e36',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setMoviesData(result);

      console.log(response);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTopMovies()
  },[]);


  return( 
    <div style = {{marginTop: "100px", marginLeft: "100px", marginRight: "100px" }}>
     <Typography variant="h3" gutterBottom>
        TOP 100 MOVIES IN THE WORLD
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ md: 12, }}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ marginTop: "10px" }}>
        {
          moviesData.map((movie) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
                <MovieCard movie={movie} key={movie.imdbid} />
              </Grid>
            )
          })
        }
      </Grid>




      <Button variant="contained" onClick={changeBlogs}>TOGGLE BLOGS</Button>

        
    </div>
  );

}
export default Home;