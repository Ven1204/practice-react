import { Route, Routes} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  // paths
  // <Switch>  - older version of react, replaced by <Routes>

  return (
    <div>
      <MainNavigation />
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetups' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
    </div>
  );
}

export default App;
