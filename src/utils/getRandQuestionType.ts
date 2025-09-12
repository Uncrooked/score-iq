export function getRandId(min: number, max: number) {
    const randId = Math.floor(Math.random() * (max - min + 1)) + min;
    return randId;
}