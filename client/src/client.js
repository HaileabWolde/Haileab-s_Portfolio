import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '9cxoj2dc',
    dataset: 'production',
    apiVersion: '2023-12-31',
    useCdn: true,
    token: 'skYx3exC02vk6RuroWUFaDWAutOiK5N1PmPmFHeFAnwTpVmMe8iRaJAY1kOtgXDvgnHEHAMOd25x2jP6shy2c4Psv5LugF12PGeDt0WyVGQofRoKxbyWk5CjL8Iriz0OTXyCi7MgxNaPeHLyEeSvIbkDB2IfrTJDuEHXUeP3agi5Rby0jtKi'
})

const builder = imageUrlBuilder((client))

export const urlFor = (source) => builder.image(source)