
export default function SkillCard({ name, items, col }: { name: string, items: string, col?: string }) {
    return (
        <>

            <div className={`${col}`}>
                
                    <div className="bg-white/5 px-4 py-2 border-t border-l border-r border-white/50">
                        <h3 className="text-lg font-bold text-white">
                            {name}
                        </h3>
                    </div>

                    <div className="px-3 py-2 space-y-1 border border-white/50">
                        {items}
                    </div>

                
            </div>




        </>
    );
}


