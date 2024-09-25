import Sanji from "../assets/IMAGES/Players/image 11.svg";
import back_btn from "../assets/IMAGES/Back-btn.svg";
import { Link } from "react-router-dom";

function SecretPG () {
    return(
        <section class="mobile-block">
            <span class="UnHead">
            <Link to="/" className="back-btn">
                    <img src={back_btn} alt="Back-btn" />
                    </Link>

            <h4 class="mobile-block__title1">Карточка Команды</h4>
            </span>
            <div class="mobile-block__container">
                <div class="FrancesscoP">
                    <img src={Sanji} alt="Sanj" />
                    <h2>SanjPanj</h2>
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
                            229 <br />
                            Италия<br />
                            Доигровщик<br />
                            188см<br />
                            80кг<br />
                            360см<br />
                            347см<br />
                            22.09.2007 <br />
                            301007 <br />
                        </h3>
                    </span>
                    <h4 class="description">Санж Панж(Баран)-рожденный в Казахстане,Алматы один из лучших нападающих в Итальянской Series A1 лиги. Считая свой невысокий рост этот игрок имеет довольно высокий съем мяча и блока. Играл в таких топовых клубах как: Peruiga, Modena Volley и сейчас на сезон 2025/26 подписал контракт с Gas Sales Piacenza.</h4>
                </div>
            </div>
        </section>
    );
}
export default SecretPG;