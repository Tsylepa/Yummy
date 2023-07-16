import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Favorites from 'pages/Favorites/Favoites';

const Auth = lazy(() => import('./pages/Register/Register'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Home = lazy(() => import('./pages/Home'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoRoute = lazy(() => import('./pages/404'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const CategoriesRecepiesPage = lazy(() => import('./components/CategoriesCardsList/CategoriesCardsList'));
const SharedLayout = lazy(() => import ('./components/SharedLayout/SharedLayout'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/home" />} />

          <Route path="/" element={<SharedLayout />} >
            <Route path="/home" element={<Home />}></Route>
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/categories" 
              categoriesFirst={'Beef'} 
              element={<CategoriesPage />}>
               <Route path="/categories/:categoryName" element={<CategoriesRecepiesPage />} />
            </Route>
            

            <Route path="*" element={<NoRoute />} />
          </Route>
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
         
          <Route path="/register" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>
        
      </Routes>
    </>
  );
};