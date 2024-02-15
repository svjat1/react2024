import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {UsersPage} from "./pages/UsersPage";

const router = createBrowserRouter([
    {
        path: 'home', element: <HomePage/>
    },
    {
        path: 'users', element: <UsersPage/>
    }
])

export {
    router
}