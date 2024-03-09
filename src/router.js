import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayouts} from "./leyouts";
import {CarsPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayouts/> , children:[
            {
                index:true, element:<Navigate to={'cars'}/>
            },
            {
                path:'cars', element:<CarsPage/>
            }
        ]
    }
])
export {
    router
}