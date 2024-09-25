import { Link } from "react-router-dom";

function Teams ({card}) {
    return (
        <Link to={`/TeamCard/${card.id}`} class="team-card">
                    <div class="card-container">
                        <div class="team-row">
                            <div class="Team__logo">
                                <img src={card.timg} alt={card.title}/>
                            </div>
                            <span class="team__Title"> {card.title} </span>
                            <span class="Team__Score"> {card.score} </span>
                        </div>
                    </div>
                </Link>
    );
}
export default Teams;