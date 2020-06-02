export const getRandomField = (random: number, search: Array<Array<number>>): [number, number] => {
        
    let search_random = true;
    let [x, y] = [
        Math.floor(Math.random() * random),
        Math.floor(Math.random() * random)
    ]

    while (search_random) {
        if (search[y][x]) {
            x = Math.floor(Math.random() * random);
            y = Math.floor(Math.random() * random)
        } else {
            search_random = false
        }
    }

    return [x, y]
}