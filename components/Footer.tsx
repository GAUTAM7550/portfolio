import Link from "next/link"
export default function footer() {
    return (
        <footer className="bg-we shadow-sm  dark:bg-gray-800  m-0">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col gap-5">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Gk-Devloper. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">Contact </Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}