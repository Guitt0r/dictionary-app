export function getRandomElementsFromArray(arr: Array<any>, n: number = Number.MAX_VALUE) {
    if (arr.length === 0) return arr;

    const arrayCopy = [...arr];

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]; // Swap elements
    }

    return arrayCopy.slice(0, Math.min(n, arr.length));
}
