type Mods = Record<string, boolean>

export function classNames(mainClass: string, additionClasses: string[] = [], mods: Mods = {}) {
    return [
        mainClass,
        ...additionClasses,
        ...Object.entries(mods).filter(([cls, mod]) => mod ).map(([cls]) => cls)
    ]
        .join(' ')
}
