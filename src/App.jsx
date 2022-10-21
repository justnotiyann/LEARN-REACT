import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testi from "./components/Testi";
import "./stylesheets/style.css";
import CardTailwind from "./components/CardTailwind";

export default function App() {
    return (
        <main>
            <CardTailwind />
            <Navbar />
            <Hero />
            <Testi />
        </main>
    );
}
