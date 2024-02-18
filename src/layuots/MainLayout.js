import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
            MainLayout
        </div>
    );
};

export {MainLayout};