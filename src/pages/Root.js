import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// Outlet defines where the content of child components should be loaded
const RootLayout = () => {
    const navigation = useNavigation();

    return <>
        <MainNavigation></MainNavigation>
        <main>
            {navigation.state === "loading" && <p>Loading...</p>}
            <Outlet />
        </main>
    </>
}

export default RootLayout;