import "./styles.css";
import { FirstItem } from "./first-item/FirstItem";
import { SecondItem } from "./second-Item/SecondItem";

export const NavBar = () => {
  return (
    <nav>
      <FirstItem />
      <SecondItem />
    </nav>
  );
};
