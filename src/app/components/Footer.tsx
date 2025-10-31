export default function Footer() {
  
  return (
   <footer className="mt-5 mb-4 max-sm:mb-5">
        <hr />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo.svg" alt="Logo" className="w-25 mt-0.5 mx-auto block dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo-dark.svg" alt="Logo Dark" className="w-25 mt-0.5 mx-auto hidden dark:block" />

        <div className="mx-60 max-xl:mx-7 max-md:mx-7 flex items-start justify-between max-sm:mx-5">
          <div>
            <p className="text-lg font-bold max-sm:text-sm">Full-Stack Developer</p>
              
            <div><span className="font-bold text-base max-sm:text-sm">Email:</span><a href="mailto:mmoses061@gmail.com" className="font-light ml-2 max-sm:text-sm">mmoses061@gmail.com</a></div>
              
          </div>
          <div className="flex flex-col font-bold items-center justify-between">
            <span className="max-sm:text-sm">Socials</span>
            <div className="flex items-start justify-evenly">
              <a href="https://github.com/Moses-Martins" className=" block mx-3 mt-0.5 max-sm:mx-2"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/moses-martins/" className=" block mx-3 mt-0.5 max-sm:mx-3"><i className="bi bi-linkedin"></i></a>
              <a href="https://medium.com/@mosesmartins" className=" block mx-3 mt-0.5 max-sm:mx-2"><i className="bi bi-medium"></i></a>
            </div> 
          </div>
        </div>

      </footer>
  )
}
