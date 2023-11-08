import { Link } from "react-router-dom";

const Menu = () => {

    return (
<nav>
<ul>
  <li>
    <Link to={'/home'}>HomePage</Link>
  </li>
  <li>
    <Link to={'/register'}>RegisterPage</Link>
  </li>
  <li>
    <Link to={'/login'}>LoginPage</Link>
  </li>
</ul>
</nav>
)
};
export default Menu;