import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Favorites from 'pages/Favorites/Favoites';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Home = lazy(() => import('./pages/Home'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoPage = lazy(() => import('./pages/404'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const CategoriesRecepiesPage = lazy(() =>
  import('./components/CategoriesCardsList/CategoriesCardsList')
);



export const App = () => {
  return (
    <>
     <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="recipe" element={<AddRecipe />} />
          <Route path='favorite' element={<Favorites/>} />            
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/search" element={<SearchPage />} />
          
          <Route
            path="/categories"
            categoriesFirst={'Beef'}
            element={<CategoriesPage />}
          >
            <Route
              path="/categories/:categoryName"
              element={<CategoriesRecepiesPage />}
            />
          </Route>

          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>


        <Route path="*" element={<NoPage />} />


      </Routes>
         </Suspense>
    </>
  );
};
