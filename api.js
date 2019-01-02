
// const url = 'http://localhost:5000/api/v1/img';
const randomUrl = 'https://dog.ceo/api/breeds/image/random/6'

export function getRandomImage() {
    return fetch(randomUrl)
        .then(response => response.json())
        .then(img => img.message.map(img => ({
            img
        })))
        .catch(error => console.log("error occured during fetch", error))
}

export function getBreedImages(breed) {
    const apiBreed = breed.toLowerCase()
    const breedUrl = `https://dog.ceo/api/breed/${apiBreed}/images/random/6`
    return fetch(breedUrl)
        .then(response => response.json())
        .then(
            img => img.message.map(img => ({
            img
        })))
        .catch(error => console.log('error occured during breed fetch', error))
}