import { Link } from "react-router-dom";

const Menu = () => {

    return (
<nav>
<ul>
  <li>
    <Link to={'/HomePage'}>HomePage</Link>
  </li>
  <li>
    <Link to={'/RegisterPage'}>RegisterPage</Link>
  </li>
  <li>
    <Link to={'/LoginPage'}>LoginPage</Link>
  </li>
</ul>
</nav>
)
};
export default Menu;