
import { NavBar } from "../components/NavBar";

export const Home = () => {
    return <div className="min-h-screen">

        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HomeSection/>
        </main>

        {/* Footer */}

    </div>;
}