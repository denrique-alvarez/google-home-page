/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";

export const SecondItem = () => {
  return (
    <div>
      <ul class="nav-bar-second-item">
        <a class="navbar-second-item" href="#">
          <li>Gmail</li>
        </a>
        <a class="navbar-second-item" href="#">
          <li>Images</li>
        </a>
        <a class="navbar-second-item" href="#">
          <i class="fas fa-beer"></i>
        </a>
        <a class="navbar-second-item" href="#">
          <img src="./assets/navbar-img.jpg" alt="user" />
        </a>
      </ul>
    </div>
  );
};
