export default function ArticleCard({title, imagesrc, subtitle, date, readTime}: {title: string, imagesrc:string, subtitle: string, date: string, readTime: string}) {
    return (
            <div className="w-[80%] max-w-300 max-sm:w-[90%] mx-auto mb-[40px] p-6 bg-gradient-to-b from-[#8A436B] to-[#633B66] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">

                    {/* Text section */}
                    <div className="flex-grow">
                        <h1 className="text-3xl font-bold mb-3 leading-tight">
                           {title}
                        </h1>

                        <p className="text-gray-200 mb-5 leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="flex max-sm:justify-between items-center text-sm text-gray-300 space-x-4">
                            <span className="text-pink-300">{date}</span>
                            <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                            <span className="text-pink-300">{readTime} read</span>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="flex-shrink-0 relative max-md:w-[100%] max-sm:w-[100%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="block max-md:w-full max-sm:w-full w-48 h-40 object-fill rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            src={imagesrc}
                            alt="Preview image"
                        />
                    </div>

                </div>
            </div>

    )

}


