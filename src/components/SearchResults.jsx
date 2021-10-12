import React from 'react';
import './SearchResults.css'
const SearchResults = (props) => {
    let songs = props.songs
    let song_id = ''; 

    
    const callBackFunction = (song_id, song_name, song_artist) =>{
        props.func(song_id, song_name, song_artist);
        console.log("callback");
        console.log(song_id);
    }

    return ( 
        
        <div className="videorow">
            {videos.map((song)=>{
                song_id = song.id
                return(
                    
                    <div >
                    <button onClick={()=>callBackFunction(song.id, song.snippet.title, song.snippet.subtitle)}><img src={song.snippet.thumbnails.default.url} alt = ""/></button><br/>
                    <bold>{video.snippet.title}</bold><br/>
                    {video.snippet.description}
                    </div>
                );
            })}
        </div>
     );
}

export default SearchResults;