import { Link } from 'react-router-dom';

function MainNavigation() {
  return <header>
    <div>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/NewMeetupsPage'>Add New Meetups</Link>
        </li>
        <li>
          <Link to='/FavoritesPage'>Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
}
export default MainNavigation;
