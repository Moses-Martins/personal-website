
export default function ProjectCard({imageSrc, tools, name, details}: {imageSrc: string, tools: string, name: string, details: string}) {
    return (
        <>
            <div className="border border-gray-400">

                <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-50 border border-gray-400" src={imageSrc} alt="Project Image" />

                </div>

                <div>
                    <p className="border-t border-b mb-4 p-3 font-mono text-sm text-gray-300 dark:text-[#31283d]">
                        {tools}
                    </p>


                    <div className="px-5">
                        <h2 className="mb-2 text-2xl max-sm:text-xl font-semibold text-white dark:text-[#31283d]">
                            {name}
                        </h2>
                        <p className="text-gray-300 dark:text-[#31283d] max-sm:text-sm">
                            {details}
                        </p>
                    </div>

                    <div className="m-2 p-3 flex align-items justify-center gap-4">
                        <a href="#" className="inline-flex items-center rounded-lg border border-purple-600 px-5 py-2 text-lg max-sm:text-sm font-medium text-purple-400 dark:text-purple-800 hover:bg-purple-900/30 transition-colors duration-200">
                            Live <span className="ml-3 text-xl max-sm:text-sm">↔</span>
                        </a>
                        <a href="#" className="inline-flex items-center rounded-lg border border-gray-600 px-5 py-2 text-lg max-sm:text-sm font-medium text-gray-300 dark:text-[#31283d] hover:bg-gray-700 dark:hover:bg-gray-700/30 transition-colors duration-200">
                            Cached <span className="ml-3 text-xl max-sm:text-sm">➢</span>
                        </a>
                    </div>
                </div>

            </div>

        </>
    );
}
