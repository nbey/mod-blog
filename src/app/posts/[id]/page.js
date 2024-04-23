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
    <div className="flex flex-col">
      <div className="inline-flex items-center pt-4 pl-4">
        <span className="sr-only">Prev Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <Link href={"/"} classes="pt-2 pl-2">
          {'View All Posts'}
        </Link>
      </div>
      <h1 className="capitalize p-4 text-4xl border-black border-solid border-b-2">
        {post.title}
      </h1>
      <p
        className="p-6 mt-8"
      >{post.body}</p>
    </div>
  )
}