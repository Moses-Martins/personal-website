export default function ArticleCard() {
    return (
            <div className="w-[70%] mx-auto mb-[40px] p-6 bg-gradient-to-b from-[#8A436B] to-[#633B66] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">

                    {/* Text section */}
                    <div className="flex-grow">
                        <h1 className="text-3xl font-bold mb-3 leading-tight">
                            7 Websites I Visit Every Day in 2025
                        </h1>

                        <p className="text-gray-300 mb-5 leading-relaxed">
                            If there’s one thing I’m addicted to—besides coffee—it’s the internet.
                        </p>

                        <div className="flex items-center text-sm text-gray-300 space-x-4">
                            <span>Sep 23, 2025</span>
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            <span>5 min read</span>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="flex-shrink-0 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="w-full md:w-48 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            src="placeholder-image-dark-calendar.png"
                            alt="Preview image"
                        />
                    </div>

                </div>
            </div>

    )

}


