import { Link, useParams } from "react-router-dom";
import back_btn from "../assets/IMAGES/Back-btn.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsCardPG () {

    const {id} = useParams();
    const[post, setPost] = useState({});

    useEffect(() => {
        async function FetchPost() {
            try {
                const response = await axios.get(`https://ed66ceb767486e9a.mokky.dev/News/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        FetchPost();
    }, [id]);


    return (
        <section class="mobile-block">
            <span class="UnHead">
            <Link to="/AllNews" className="back-btn">
                    <img src={back_btn} alt="Back-btn" />
                    </Link>
            <h4 class="mobile-block__title1">Новости</h4>
            </span>
            <div class="mobile-block__container">
                <h2 class="News-Title">{post.title}</h2>
                <div class="News-Photo">
                <img src={post.imageUrl} alt={post.title} />
                </div>  
                <h3 class="description">
                    {post.description}
                </h3>
                </div>
        </section>
    );
}
export default NewsCardPG;