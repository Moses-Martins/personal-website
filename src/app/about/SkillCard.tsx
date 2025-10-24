
export default function SkillCard({ name, items, col }: { name: string, items: string, col?: string }) {
    return (
        <>

            <div className={`${col}`}>
                
                    <div className="bg-white/5 dark:bg-[#31283d]/5 px-4 py-2 border-t border-l border-r border-white/50 dark:border-[#31283d]">
                        <h3 className="text-lg font-bold text-white dark:text-[#31283d]">
                            {name}
                        </h3>
                    </div>

                    <div className="px-3 py-2 space-y-1 border border-white/50 dark:border-[#31283d]">
                        {items}
                    </div>

                
            </div>




        </>
    );
}


