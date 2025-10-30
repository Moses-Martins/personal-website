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
                    <ProjectCard imageSrc="/personal-website-img.png" tools="Next.Js TypeScript TailwindCSS" name="mosesmartins.com" details="My personal website" live="https://www.mosesmartins.com/" github="https://github.com/Moses-Martins/personal-website" />
                    <ProjectCard imageSrc="/BrowserExtensionLogo.jpg" tools="TypeScript Vite TailwindCSS" name="Browser Extensions" details="Frontend for browser add-ons" live="https://browser-extension-project.netlify.app/" github="https://github.com/Moses-Martins/Browser-extension-manager-UI" />
                    <ProjectCard imageSrc="/Hireloop.png" tools="Golang GorillaMux Postgres S3Bucket" name="HireLoop" details="REST API for a modern Job platform" live="https://hireloop.onrender.com/swagger/index.html" github="https://github.com/Moses-Martins/HireLoop" />
                    <ProjectCard imageSrc="/Focuslog.png" tools="TypeScript Express PostgreSQL" name="FocusLog" details="Web app for tracking study sessions" live="https://focuslog.onrender.com/api-docs/" github="https://github.com/Moses-Martins/FocusLog" />
                </section>
            </main>

            <Footer />


        </>
    );
}
