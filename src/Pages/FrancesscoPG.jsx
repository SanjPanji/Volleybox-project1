import Franccesco from "../assets/IMAGES/Players/image 9.svg";
import back_btn from "../assets/IMAGES/Back-btn.svg";
import { Link } from "react-router-dom";

function FrancesscoPG () {
    return (
        <section class="mobile-block">
            <span class="UnHead">
            <Link to="/Players" className="back-btn">
                    <img src={back_btn} alt="Back-btn" />
                    </Link>
            <h4 class="mobile-block__title1">Карточка игрока</h4>
            </span>
            <div class="mobile-block__container">
                <div class="FrancesscoP">
                    <img src={Franccesco} alt="Francessco" />
                    <h2>Francessco Reccine</h2>
                    <span class="Stats">
                        <h3 class="Stats1">
                            Рейтинг <br />
                            Гражданство<br />
                            позиция<br />
                            Рост<br />
                            Вес<br />
                            Атака<br />
                            Блок<br />
                            дата рождения<br />
                            просмотры<br />
                            
                        </h3>
                        <h3 class="Stats2">
                            452 <br />
                            Италия<br />
                            Доигровщик<br />
                            183см<br />
                            75кг<br />
                            342см<br />
                            335см<br />
                            02.07.1999 <br />
                            49660 <br />
                        </h3>
                    </span>
                    <h4 class="description">Франческо Речине (родился 1999) — итальянский волейболист, выступающий на позиции доигровщика. Речине начал свою профессиональную карьеру в молодёжных командах, постепенно пробиваясь в итальянские клубы высшего дивизиона. Благодаря своим впечатляющим физическим данным, технике и силе удара, он быстро привлек внимание тренеров и болельщиков. Франческо играл за различные итальянские клубы, среди которых "Перуджа" и "Монца". Также он регулярно призывается в национальную сборную Италии, где показывает отличную игру и стремится к новым вершинам в своей карьере.</h4>
                </div>
            </div>
        </section>
    );
}
export default FrancesscoPG;
