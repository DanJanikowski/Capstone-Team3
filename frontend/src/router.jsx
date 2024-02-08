import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import LogoutPage from './pages/LogoutPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
            },
    {
        path: "/home",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path:"logout",
                element: <LogoutPage />
            }

        ],
        errorElement: <NotFoundPage />
    },
    
]);

export default router;