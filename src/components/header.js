import "../App.css";
import Uk_flag from "../assets/uk_flag.jpg";

export const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>UK Cities</h2>
      <img className="flag" src={Uk_flag} alt="UK FLAG" />
    </header>
  );
};
