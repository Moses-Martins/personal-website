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
                    <div className="dark:bg-white/5 bg-[#31283d]/5 px-4 py-2 border-t border-l border-r dark:border-white/50 border-[#31283d]">
                        <h3 className="text-lg font-bold dark:text-white text-[#31283d]">
                            Reach Me
                        </h3>
                    </div>

                    <div className="px-3 py-2 space-y-1 border dark:border-white/50 border-[#31283d]">
                        <span className="flex items-center space-x-2">
                            <i className="bi bi-telephone-fill"></i>
                            <span>+234 908 137 4422</span>
                        </span> 
                        <span className="flex items-center space-x-2 hover:bg-pink-300 max-sm:active:bg-pink-300">
                            <i className="bi bi-envelope-at-fill"></i>
                            <a href="mailto:mmoses061@gmail.com">mmoses061@gmail.com</a>
                        </span>
                        <span className="flex items-center space-x-2 hover:bg-pink-300 max-sm:active:bg-pink-300">
                            <i className="bi bi-linkedin"></i>
                            <a href="https://www.linkedin.com/in/moses-martins/">Linkedin</a>
                        </span>
                        <span className="flex items-center space-x-2 hover:bg-pink-300 max-sm:active:bg-pink-300">
                            <i className="bi bi-discord"></i>
                            <a href="https://discord.com/users/1171898012470104180">Discord</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
