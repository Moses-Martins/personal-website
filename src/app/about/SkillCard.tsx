
export default function SkillCard({ name, items, col }: { name: string, items: string, col?: string }) {
    return (
        <>

            <div className={`${col}`}>
                
                    <div className="dark:bg-white/5 bg-[#31283d]/5 px-4 py-2 border-t border-l border-r dark:border-white/50 border-[#31283d]">
                        <h3 className="text-lg font-bold dark:text-white text-[#31283d]">
                            {name}
                        </h3>
                    </div>

                    <div className="px-3 py-2 space-y-1 border dark:border-white/50 border-[#31283d]">
                        {items}
                    </div>

                
            </div>


        </>
    );
}


