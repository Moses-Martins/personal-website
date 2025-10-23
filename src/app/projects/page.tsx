import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <>
            <Header />
            <Title name="Projects" />
            <section className="w-[90%] mx-auto mt-[30px] mb-[110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3%] max-sm:gap-[50px] max-sm:mb-[70px]">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>

            <Footer />
            

        </>
    );
}
