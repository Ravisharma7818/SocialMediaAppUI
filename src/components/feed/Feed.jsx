import React from 'react'
import "./feed.css"
import Share from "../share/Share";
import Post from '../post/Post';
import {Posts} from "../../dumydata";
const Feed = () => {
   return(
      <div className="feed">
          <div className="feedWrapper">
          <Share/>
         
          {Posts.map((P) => (
            <Post key={P.id} Post={P} />
          ))}
          
        

     </div>
      </div>
   )
}

export default Feed ;
