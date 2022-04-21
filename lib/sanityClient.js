import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3n3v373o', // you can find this at sanity.io in the project settings
  dataset: 'production',
  apiVersion: '2022-04-21',
  useCdn: false,
  // go to the sanity.io => api => CORS origins (add cross origin of website e.g http://localhost:3000) => tokens (add api token => Editor access, and name this token)
  token:
    'skugaJ8TRhu99x1RSBEyt2yTjC8qjNhZyXVY6759lD9wAqbRhQC2mrYezqMoYXyJ4htHfxPlrmvEZgYLJLzpAe7MzHujqiHp01793R6mguyoHaAcWJr8xeMGUn1PXv0diO4OynF8PTGrvKLfHtfDJtzgmkvikHkfaIjJBWGBojp3KIzJaokz'
})
