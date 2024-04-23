import Image from "next/image";
import Link from "next/link";

export async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const posts = await loadPosts()

  return (
    <div
      key="list"
      className="w-full"
    >
      <ul>
        {posts.slice(0,10).map((b, idx) => (
          <li
            key={idx}
            className="my-4"
          >
            <div>
              <h3 className="title"
                ><Link href={`/posts/${b.id}`}>{b.title}</Link>
              </h3>
              <p className="body">{b.body}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
