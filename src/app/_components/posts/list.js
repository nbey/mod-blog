'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PostList({ posts }) {
  const pageLength = 10
  const totalPages = Math.ceil(posts.length / pageLength)

  const [currentPage, setPage] = useState(1)
  const [currentPosts, setCurrentPosts] = useState(posts.slice(pageLength * (currentPage - 1), pageLength * currentPage))

  useEffect(() => {
    setCurrentPosts(
      posts.slice(pageLength * (currentPage - 1), pageLength * currentPage)
    )
  }, [currentPage, posts])

  return ([
    <div
      key="list"
      className="py-8 px-4 max-sm:min-w-full max-w-screen-md lg:py-4 lg:px-6">
      <ul
        className="flex flex-col space-between"
      >
          {currentPosts.map( (p, idx) => {
            return (
              <li key={idx} className="my-4">
                <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="flex flex-row justify-between">
                    <h2 className="capitalize hover:underline mb-2 text-2xl font-bold tracking-tight px-1 w-4/5"><a href={`/posts/${p.id}`}>{p.title}</a></h2>
                    <div className="flex justify-end items-center mb-5 text-gray-500 self-baseline">
                        <span className="text-sm text-end">2 days ago</span>
                    </div>
                  </div>
                  {/* <p className="mb-5 font-light text-gray-500">{p.body}</p> */}
                  <div className="flex justify-between items-center">
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
            )
          })}
      </ul>
    </div>,
    <div
      key="pagination"
      className="sticky bottom-0 left-0 inline-flex justify-center gap-1 w-screen bg-gray-200 -ml-4 py-2 pb-4"
    >
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (currentPage > 1) {
            setPage(currentPage - 1)
          }
        }}
        className={
          `inline-flex items-center justify-center bg-white size-8 rounded border border-gray-100 text-gray-900 ${currentPage == 1 && 'invisible'}`
        }
      >
        <span className="sr-only">Prev Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div>
        <label htmlFor="PaginationPage" className="sr-only">Page</label>

        <input
          className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          id="PaginationPage"
          readOnly={true}
        />
      </div>

      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (currentPage < totalPages) {
            setPage(currentPage + 1)
          }
        }}
        className={
          `inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${currentPage == totalPages && 'invisible'}`
        }
      >
        <span className="sr-only">Next Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  ])
}