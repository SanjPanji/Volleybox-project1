import back_btn from "../assets/IMAGES/Back-btn.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MonzaPG () {

    const {id} = useParams();
    const[card, setCard] = useState({});

    useEffect(() => {
        async function fetchCard() {
            try {
                const response = await axios.get(`https://ed66ceb767486e9a.mokky.dev/Teams/${id}`);
                setCard(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCard();
    }, [id]);

    return (
        <section class="mobile-block">
            <span class="UnHead">
            <Link to="/Teams" className="back-btn">
                    <img src={back_btn} alt="Back-btn" />
                    </Link>
            <h4 class="mobile-block__title1">Карточка Команды</h4>
            </span>
            <div class="mobile-block__container">
                <div class="Monza-Logo">
                    <img src= {card.timg} alt={card.title} class="Team-logo" />
                    <h3>{card.title}</h3>
                </div>
            <div class="Monza-Team">
                <img src= {card.imageUrl} alt={card.title} />
            </div>
                <h4 class="description">
                    {card.description}</h4>
            </div>
        </section>
    );
}
export default MonzaPG;