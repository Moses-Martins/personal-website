
export default function ProjectCard() {
    return (
        <>
            <div className="border border-gray-400">

                <div className="relative overflow-hidden p-6 pb-24">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="#" alt="Project Image" />

                </div>

                <div>
                    <p className="border-t border-b mb-4 p-3 font-mono text-sm text-gray-300">
                        HTML SCSS Python Flask
                    </p>


                    <div className="px-5">
                        <h2 className="mb-2 text-2xl font-semibold text-white">
                            ChertNodes
                        </h2>
                        <p className="text-gray-300">
                            Minecraft servers hosting
                        </p>
                    </div>

                    <div className="m-2 p-3 flex align-items justify-center gap-4">
                        <a href="#" className="inline-flex items-center rounded-lg border border-purple-600 px-5 py-2 text-lg font-medium text-purple-400 hover:bg-purple-900/30 transition-colors duration-200">
                            Live <span className="ml-3 text-xl">↔</span>
                        </a>
                        <a href="#" className="inline-flex items-center rounded-lg border border-gray-600 px-5 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                            Cached <span className="ml-3 text-xl">➢</span>
                        </a>
                    </div>
                </div>

            </div>

        </>
    );
}
