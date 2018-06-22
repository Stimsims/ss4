export const getRandomItem = (ray) => {
    let index = Math.floor(ray.length * Math.random());
    return ray[index];
}