import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// Outlet defines where the content of child components should be loaded
const RootLayout = () => {
    return <>
        <MainNavigation></MainNavigation>
        <main>
            <Outlet />
        </main>
    </>
}

export default RootLayout;