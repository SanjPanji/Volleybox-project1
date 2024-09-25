import MainP_teams from "../assets/IMAGES/MainP/MainP__teams.svg";
import MainP__news from "../assets/IMAGES/MainP/MainP__news.svg";
import MainP__players from "../assets/IMAGES/MainP/MainP__players.svg";
import MainP__secret from "../assets/IMAGES/MainP/MainP__secret.svg";
import { Link } from "react-router-dom";
function MainPG() {
    return (
        <section class="mobile-block">
            <div class="mobile-block__title">Главная</div>
            <div class="mobile-block__container">
                <div class="category-row">
                    <Link to="/Teams" class="category-card">
                        <img src={MainP_teams} alt="MainP__teams" />
                    </Link>
                    <Link to="/AllNews" class="category-card">
                        <img src={MainP__news} alt="MainP__news" />
                    </Link>
                    <Link to="/Players" class="category-card">
                        <img src={MainP__players} alt="MainP__players" />
                    </Link>
                    <Link to="/Secret" class="category-card">
                        <img src={MainP__secret} alt="MainP__secret" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default MainPG;