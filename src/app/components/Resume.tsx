export default function Resume() {

  return (
    <div className="w-[80%] max-md:w-[90%] max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-25">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        My Resume
      </h2>

      <div className="aspect-[8.5/11] w-full h-80 border rounded-md overflow-hidden">
        <iframe
          src="https://drive.google.com/file/d/1jy2JEWlsNcsWXvDUWWsVvMZbkNozKWl9/preview"
          title="Resume PDF"
          className="w-full h-79.5"
        />
      </div>

      <div className="mt-4 text-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1jy2JEWlsNcsWXvDUWWsVvMZbkNozKWl9"
          download
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-pink-500 transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>
    </div>


  )
}
