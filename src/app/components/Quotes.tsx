"use client"
import { useEffect, useState } from "react"

export default function Quotes() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(true)

  // Fetch a random quote between 1 and 60
  const fetchRandomQuote = async () => {
    try {
      const randomId = Math.floor(Math.random() * 60) + 1 // 1 → 60
      const res = await fetch(`https://mosesmartins.com/api/quotes/${randomId}`)
      if (!res.ok) throw new Error(`Failed to fetch quote #${randomId}`)

      const data = await res.json()
      setQuote(data.quote)
      setAuthor(data.author)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching quote:", error)
      setQuote("Failed to load quote.")
      setAuthor("")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomQuote() // load the first quote

    const interval = setInterval(fetchRandomQuote, 4000) // every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center p-8 font-mono mt-10">
      <table className="text-white dark:text-[#31283d]">
        <tbody>
          <tr>
            <td
              colSpan={2}
              className="border-l border-r border-t border-white dark:border-[#31283d] p-4 pt-5 text-[17px] leading-relaxed align-top relative"
            >
              <span className="text-5xl text-gray-200 absolute -top-4 left-4 bg-[#31283d] dark:bg-[#ffffff] dark:text-[#31283d] h-[30%]">
                “
              </span>
              {loading ? "Loading quote..." : quote}
            </td>
          </tr>
          <tr>
            <td className="border-t border-white dark:border-[#31283d] w-auto"></td>
            <td className="relative w-[40%] text-center p-3 border-t border-r border-b border-gray-500/70 dark:border-[#31283d] border-l border-white">
              — {author || "Unknown"}
              <span className="text-5xl text-gray-200 absolute -top-4 right-2 bg-[#31283d] dark:bg-[#ffffff] dark:text-[#31283d] h-[40%]">
                ”
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
