import {CommentContainer} from "../components/Container/CommentContainer/CommentContainer";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentContainer/>
        </div>
    );
};

export {CommentsPage};