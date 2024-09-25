import Teams from "./Teams.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function TeamList () {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get('https://ed66ceb767486e9a.mokky.dev/Teams');
        setCards(response.data);
      } catch(error) {
          console.log(error);
      }
      }
      fetchCards();
  }, []);
      
        return(
          <div class="teams_block">
            {cards.map((card) => (
              <Teams  key={card.id} card={card} />
              ))}
          </div>
        );
      }
export default TeamList;