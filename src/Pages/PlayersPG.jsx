import Darlan from "../assets/IMAGES/Players/image 7.svg";
import Tomas from "../assets/IMAGES/Players/image 8.svg";
import Franccesco from "../assets/IMAGES/Players/image 9.svg";
import Andrey from "../assets/IMAGES/Players/image 10.svg";
import { Link } from "react-router-dom";

function PlayersPG () {
    return (
        <section class="mobile-block">
            <div class="mobile-block__title">Игроки</div>
            <div class="mobile-block__container">
                <div class="category-row">
                    <div class="Player-card">
                        <img src={Darlan} alt="Darlan" />
                        <h2 class="Player-title">Darlan Souza</h2>
                    </div>
                    <div class="Player-card">
                        <img src={Tomas} alt="Tomas" />
                        <h2 class="Player-title">Tomas Fornal</h2>
                    </div>
                    <Link to="/PlayerCard" class="Player-card">
                        <img src={Franccesco} alt="Francessco" />
                        <h2 class="Player-title">Francessco Reccine</h2>
                    </Link>
                    <div class="Player-card">
                        <img src={Andrey} alt="Andrey" />
                        <h2 class="Player-title">Andrey Marchenko</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlayersPG;