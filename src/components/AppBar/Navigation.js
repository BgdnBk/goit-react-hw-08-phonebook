import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink exact to="/">
        Главная
      </NavLink>
      <NavLink exact to="/contacts">
        Контакты
      </NavLink>
    </div>
  );
}
