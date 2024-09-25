import { Link } from "react-router-dom";

function AllNews ({post}) {
    return (
        <Link to={`/NewsCard/${post.id}`} class="ews-ncard">
                    <div class="team-card">
                        <div class="card-container">
                            <h3 class="news-card__title">{post.title} </h3>
                            <span class="news-card__date"> {post.date} </span>
                            <span class="news-card__category"> {post.News} </span>
                        </div>
                    </div>
                </Link>
    );
}
export default AllNews;