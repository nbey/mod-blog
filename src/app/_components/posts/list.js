import Image from "next/image";
import Link from "next/link";
import { loadPosts } from "@/api/load-posts";


export default async function PostList() {
  const posts = await loadPosts()

  return (
    <div
      key="list"
      className="w-full"
    >
      <ul>
        {posts.slice(0,10).map((p, idx) => (
          <li
            key={idx}
            className="my-4"
          >
            <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="flex flex-row justify-between">
                    <h2 className="capitalize hover:underline text-2xl font-bold tracking-tight w-4/5">
                      <a href={`/posts/${p.id}`}>{p.title}</a>
                    </h2>
                    <div className="flex justify-end items-center mb-5 text-gray-500 self-baseline">
                        <span className="text-sm text-end">2 days ago</span>
                    </div>
                  </div>
                  {/* <p className="mb-5 font-light text-gray-500">{p.body}</p> */}
                  <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-4">
                          <Image
                            className="w-7 h-7 rounded-full"
                            src="/avatar.jpeg"
                            width={7}
                            height={7}
                            alt="Nafis Bey's avatar"
                          />
                          <span className="font-medium dark:text-white">
                              Nafis Bey
                          </span>
                      </div>
                      <Link href={`/posts/${p.id}`} className="inline-flex items-center font-medium text-primary-600 hover:underline">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                  </div>
                </article>
          </li>
        ))}
      </ul>

    </div>
  );
}
