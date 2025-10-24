

export default function Footer() {
  
  return (
   <footer className="mt-[3%]">
        <hr />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo.svg" alt="Logo" className="w-[100px] mt-[1%] mx-[auto] h-[auto] block dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="logo-dark.svg" alt="Logo Dark" className="w-[100px] mt-[1%] mx-[auto] h-[auto] hidden dark:block" />

        <div className="mx-[25%] mb-[1.5%] max-sm:mb-[10%] flex items-start justify-between max-sm:mx-[5%]">
          <div>
            <p className="text-[18px] font-bold max-sm:text-[14px]">Full-Stack Developer</p>
              
            <div><span className="font-bold text-[15px] max-sm:text-[13px]">Email:</span><span className="font-light ml-[5px] max-sm:text-[14px]">mmoses061@gmail.com</span></div>
              
          </div>
          <div className="flex flex-col font-bold justify-between">
            <span className="max-sm:text-[14px]">Socials</span>
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
