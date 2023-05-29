type Mods = Record<string, boolean>

export function classNames(mainClass: string, additionClasses: string[] = [], mods: Mods = {}) {
    return [
        mainClass,
        ...additionClasses,
        ...Object.entries(mods).filter(arr => arr[1]).map(([cls]) => cls)
    ]
        .join(' ')
}
