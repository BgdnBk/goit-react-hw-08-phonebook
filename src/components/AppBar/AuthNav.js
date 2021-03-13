import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration">Регистрация</NavLink>;
      <NavLink to="/login">Авторизация</NavLink>;
    </div>
  );
}
