import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Title from "../components/Title";
import SkillCard from "./SkillCard";

export default function About() {
    return (
        <>
            <Header />
            <Title name="About" />
            <main className="flex-grow">
                <div className="max-w-300 mx-auto mt-7 max-sm:mt-4.5 flex max-lg:flex-col max-sm:flex-col max-lg:items-center max-sm:items-center justify-around max-lg:gap-10 max-sm:gap-10">
                    <p className="ml-12.5 max-lg:ml-[0] max-sm:ml-[0] max-lg:w-[90%] w-[40%] max-sm:w-[90%]">
                        Hello, I&apos;m Moses!<br /><br />

                        I&apos;m a self-taught software developer based in Lagos,
                        Nigeria. I can develop responsive websites from
                        scratch and raise them into modern user-friendly web
                        experiences.<br /><br />

                        Transforming my creativity and knowledge into
                        websites has been my passion for years. I have
                        been helping various clients to establish their
                        presence online. I always strive to learn about the
                        newest technologies and frameworks.

                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="mr-8 max-lg:mr-[0] max-sm:mr-[0] w-57.5 border rounded-xl max-sm:mb-6" src="ProfilePic.jpg" alt="Profile Pic" />

                </div>

                <Title name="Skills" />

                <div className="max-w-300 mx-auto flex max-lg:flex-col max-sm:flex-col max-lg:gap-6 max-lg:items-center max-sm:gap-6 max-sm:items-center justify-around mb-25">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-100" src="five-stars-depth.svg" alt="svg" />

                    <div className="w-[40%] max-lg:w-[70%] max-sm:w-[70%] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[9px] max-lg:gap-9 max-sm:gap-9">
                        <SkillCard name={"Languages"} items={"Python Golang JavaScript C TypeScript"} />
                        <SkillCard name={"Databases"} items={"SQLite MongoDB PostgreSQL MySQL"} />
                        <SkillCard name={"Tools"} items={"Visual Studio Code Git AWS GitHub Jest"} />
                        <SkillCard name={"Other"} items={"WSL Postman"} col="col-start-2 max-lg:col-start-2 max-sm:col-start-1" />
                        <SkillCard name={"Frameworks"} items={"React Next.js Django Gin TailwindCSS Bootstrap"} col="col-start-3 max-lg:col-start-1 max-sm:col-start-1" />
                    </div>
                </div>
                <Resume />
            </main>

            <Footer />

        </>
    );
}
