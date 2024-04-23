export async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function loadPost(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}