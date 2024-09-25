import AllNews from "./AllNews";
import { useState, useEffect} from "react";
import axios from "axios";

function NewsList () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
        async function FetchPosts() {
          try{
            const response = await axios.get('https://ed66ceb767486e9a.mokky.dev/News');
            setPosts(response.data);
          } catch(error) {
            console.log(error);
          }
        }
        FetchPosts();
  }, []);

        return(
          <div class="all-news-block">
            {posts.map((post) => (
              <AllNews key={post.id} post={post} />
              ))}
          </div>
        );
    }

export default NewsList;