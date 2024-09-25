import Menu_btn from "../assets/IMAGES/menu-btn.svg";
import VolleyIcon from "../assets/IMAGES/Volley.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header class="header">
        <div class="container">
            <Link to="/" class="btn.category">
                <img src={Menu_btn} alt="Menu button" />
            </Link>
                    <div class="center-content">
                        <div class="logo-title">VolleyBox</div>
                        <span class="logo-svg">
                            <img src={VolleyIcon} alt="VolleyIcon" />
                        </span>
                    </div>
        </div>
    </header>
    );
}
export default Header;