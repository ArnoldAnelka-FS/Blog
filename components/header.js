import Link from "next/link"
export default function header() {
    return (
       <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div>
            <input type="text" className="mt-1 block w-60 px-3 py-2 bg-gray-500" placeholder="Search..."/>
        </div>
        <div className="text-2xl text-indigo-500">
            <a href="/"> Technology Journal </a>
        </div>
        <div>
            <div className="flex text-indigo-500 space-x-3">
            <a href="/posts/entry1">Journal Entry 1 </a><br/>
            <a href="/posts/entry2">Journal Entry 2 </a><br/>
            <a href="/posts/entry3">Journal Entry 3 </a>
            <a href="/posts/entry4">Journal Entry 4 </a>
            </div>
        </div>
        </div>
       </header>
    )
}