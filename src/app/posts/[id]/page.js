export async function loadPost(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function PostDetails({ params: { id }}) {
  const post = await loadPost(id)

  return (
    <div className="m-4 p-4 w-full">
      <h2 className="capitalize">{post.title}</h2>
      <p className="my-4">{post.body}</p>
    </div>
  )
}