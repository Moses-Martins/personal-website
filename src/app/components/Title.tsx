export default function Title({ name }: { name: string }) {
    return (
        <div className="relative flex items-center mt-[60px] p-6 max-sm:mt-[85px] max-sm:p-3">
            {/* Line */}
            <div className="absolute left-[100px] right-[100px] h-0.5 bg-purple-600 rounded-full"></div>

            {/* Text (shifted 30%) */}
            <h2 className="relative left-[30%] -translate-x-[30%] px-4 text-3xl font-semibold text-white bg-[#31283d] max-sm:text-2xl">
                <span className="text-purple-400">#</span>{name}
            </h2>
        </div>
    );
}
