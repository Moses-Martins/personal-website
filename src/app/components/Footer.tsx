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
              
            <div><span className="font-bold text-base max-sm:text-sm">Email:</span><span className="font-light ml-2 max-sm:text-sm">mmoses061@gmail.com</span></div>
              
          </div>
          <div className="flex flex-col font-bold justify-between">
            <span className="max-sm:text-sm">Socials</span>
            <div className="flex items-start justify-evenly">
              <i className="bi bi-github block m-[10%] max-sm:m-[3%]"></i>
              <i className="bi bi-linkedin block m-[10%] max-sm:m-[3%]"></i>
              <i className="bi bi-medium block m-[10%] max-sm:m-[3%]"></i>
            </div>
          </div>
        </div>

      </footer>
  )
}
