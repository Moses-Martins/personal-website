import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <>
            <Header />
            <Title name="Projects" />
            <main className="flex-grow">
                <section className="w-[90%] max-w-500 mx-auto mt-7.5 mb-27.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:gap-10 max-sm:mb-20">
                    <ProjectCard imageSrc="/BrowserExtensionLogo.jpg" tools="TypeScript Vite TailwindCSS" name="Browser Extensions" details="Frontend interface for browser add-ons" />
                    <ProjectCard imageSrc="/Hireloop.png" tools="Golang GorillaMux Postgres S3Bucket" name="HireLoop" details="REST API for a modern Job platform" />
                    <ProjectCard imageSrc="/Focuslog.png" tools="TypeScript Express PostgreSQL" name="FocusLog" details="Web app for tracking study sessions" />
                </section>
            </main>

            <Footer />


        </>
    );
}
