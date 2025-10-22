

export default function Footer() {
  
  return (
   <footer className="mt-[3%]">
        <hr />
        <img src="logo.svg" alt="Logo" className="w-[100px] mt-[1%] mx-[auto] h-[auto]" />
        <div className="mx-[25%] mb-[1.5%] flex items-start justify-between">
          <div>
            <p className="text-[18px] font-bold">Full-Stack Developer</p>
              
            <div><span className="font-bold text-[15px]">Email:</span><span className="font-light text-[15px] ml-[5px]">mmoses061@gmail.com</span></div>
              
          </div>
          <div className="flex flex-col justify-between">
            <span>Socials</span>
            <div className="flex items-start justify-evenly">
              <i className="bi bi-github block m-[10%]"></i>
              <i className="bi bi-linkedin block m-[10%]"></i>
              <i className="bi bi-medium block m-[10%]"></i>
            </div>
          </div>
        </div>

      </footer>
  )
}
