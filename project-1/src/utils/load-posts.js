export const loadPosts = async () => {
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

  const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')

  const [posts, photos] = await Promise.all([postResponse, photosResponse])

  const postsJson = await posts.json()
  const photosJson = await photos.json()

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }
  })
  return postsAndPhotos
}