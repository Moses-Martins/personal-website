import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import SkillCard from "./SkillCard";

export default function About() {
    return (
        <>
            <Header />
            <Title name="About" />
            <div className="mt-[30px] flex justify-around">
                <p className="ml-[50px] w-[40%]">
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
                <img className="mr-[30px] w-[230px] h-auto border rounded-xl" src="ProfilePic.jpg" alt="Profile Pic" />

            </div>

            <Title name="Skills" />

            <div className="flex justify-around mb-[100px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-[400px]" src="five-stars-depth.svg" alt="svg" />

                <div className="w-[40%] grid grid-cols-3 gap-[9px]">
                    <SkillCard name={"Languages"} items={"Python Golang JavaScript C TypeScript"} />
                    <SkillCard name={"Databases"} items={"SQLite MongoDB PostgreSQL MySQL"} />
                    <SkillCard name={"Tools"} items={"Visual Studio Code Git AWS GitHub Jest"} />
                    <SkillCard name={"Other"} items={"WSL Postman"} col="col-start-2" />
                    <SkillCard name={"Frameworks"} items={"React Next.js Django Gin TailwindCSS Bootstrap"} col="col-start-3" />
                </div>
            </div>

            <Footer />

        </>
    );
}
