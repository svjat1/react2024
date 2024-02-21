import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, MainLayout, PublicLayout} from "./layouts";
import {CarsPage, LoginsPage, RegistersPage} from "./page";


const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>,children:[
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children:[
                    {
                        path:'login', element: <LoginsPage/>
                    },
                    {
                        path:'register', element:<RegistersPage/>
                    }
                ]
            },
            {
                element: <AuthLayout/>, children:[
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]
    }
])
export {
    router
}