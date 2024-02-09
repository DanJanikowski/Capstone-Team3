import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import LogoutPage from './pages/LogoutPage';
import NotFoundPage from './pages/NotFoundPage';
import SalaryCalculator from './pages/SalaryCalculator';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <NotFoundPage />
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
                path: 'salary',
                element: <SalaryCalculator />
            }
        ]
    },
    {
        path: "/home/logout",
        element: <LogoutPage />
    }

]);

export default router;