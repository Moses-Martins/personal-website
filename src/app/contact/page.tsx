import Header from "../components/Header";
import Title from "../components/Title";


export default function Contact() {
    return (
        <>
            <Header />
            <Title name="Contact" />
            <div className="max-w-300 mx-auto mt-15 max-sm:mt-5 flex max-sm:flex-col justify-around items-center max-sm:gap-10">
                <p className="w-[40%] max-sm:w-[90%]">
                    I&apos;m interested in freelance opportunities. However,
                    if you have other request or question, don&apos;t
                    hesitate to contact me

                </p>

                <div>
                    <div className="bg-white/5 px-4 py-2 border-t border-l border-r border-white/50">
                        <h3 className="text-lg font-bold text-white">
                            Reach Me
                        </h3>
                    </div>

                    <div className="px-3 py-2 space-y-1 border border-white/50">
                        <span className="flex items-center space-x-2">
                            <i className="bi bi-telephone-fill"></i>
                            <span>+234 908 285 9098</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <i className="bi bi-envelope-at-fill"></i>
                            <span>mmoses061@gmail.com</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <i className="bi bi-linkedin"></i>
                            <span>Linkedin</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <i className="bi bi-discord"></i>
                            <span>Discord</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
