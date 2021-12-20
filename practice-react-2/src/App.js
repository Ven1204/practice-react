import { Route, Routes} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  // paths
  // <Switch>  - older version of react, replaced by <BrowserRouter>

  return (
    <div>
      <MainNavigation />
        <Routes>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupsPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
