export const randomColor = () => {
    const R = Math.random() * 256
    const G = Math.random() * 256
    const B = Math.random() * 256
    return `rgb(${R},${G},${B})`
}