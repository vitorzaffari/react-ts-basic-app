import "./Header.css";
import TrophyImg from "../assets/trophy.png";

const Header = () => {
  return (
    <header>
      <img src={TrophyImg} alt="Trophy" />
      <h1>Your Goals</h1>
    </header>
  );
};

export default Header;
