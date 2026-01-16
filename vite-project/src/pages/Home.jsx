
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutMe } from "../components/AboutMe";

export const Home = () => {
    return <div className="min-h-screen">

        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HomeSection/>
            <AboutMe/>
        </main>

        {/* Footer */}

    </div>;
}