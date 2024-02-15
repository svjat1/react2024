import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorsPage} from "./pages/errosPage/ErrorsPage";
import {PostsPage} from "./pages/PostsPage";



const router = createBrowserRouter([
    {
        path:'', element: <MainLayouts/>,errorElement: <ErrorsPage/>, children:[
            {index:'true', element: <Navigate to={'todos'}/>},
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children:[
                    {
                        path:'posts', element: <PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}