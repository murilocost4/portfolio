interface SkillProps {
    color: number,
    children: any,
    title: string
}

export function Skill({color, children, title}: SkillProps) {
    if (color == 1) {
        return(
            <div className='flex gap-2 items-center justify-center skill w-56 pt-3 pb-3 border border-emerald-500 hover:scale-110 transition-all'>
                {children}
                <p className="text-slate-100 text-lg font-light">{title}</p>
            </div>
        )
    } else {
        return(
            <div className='flex gap-2 items-center justify-center skill w-56 pt-3 pb-3 border border-violet-500 hover:scale-110 transition-all'>
                {children}
                <p className="text-slate-100 text-lg font-light">{title}</p>
            </div>
        )
    }
}