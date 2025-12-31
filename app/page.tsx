import Architecture from "./components/organisms/Architecture";
import CTA from "./components/organisms/CTA";
import Footer from "./components/organisms/Footer";
import Hero from "./components/organisms/Hero";
import Value from "./components/organisms/Value";

export default function Home() {
    return (
        <main className="pt-32 ">
            <Hero />
            <Architecture />
            <Value />
            <CTA />
            <Footer />
        </main>
    );
}
