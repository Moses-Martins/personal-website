'use client'
import { useRouter } from "next/navigation";

export default function MainPage() {
  const route = useRouter();
  
  return (
     <section className="max-w-304 mt-14 mx-auto max-md:mx-5 flex items-center justify-between max-md:flex-col max-md:mt-25 max-sm:mt-27 max-sm:flex-col max-sm:gap-6">
        <div>
          <h1 className="text-4xl max-sm:text-3xl leading-12 font-medium">Hello, I am <span className="text-pink-300">Moses</span>,<br /> a full-stack <span className="text-pink-300">software developer.</span></h1>
          <p className="font-light text-lg max-sm:text-base mt-5">I build scalable and efficient web applications where front-end<br className="max-md:hidden max-sm:hidden" /> meets back-end.</p>

          <button className="mt-7 p-2 border border-pink-300 transition-all duration-300 hover:bg-pink-300 max-sm:active:bg-pink-300" onClick={() => route.push('/contact')}>Contact me !!</button>
        </div>

        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[75%]" src="ProfileImage.png" alt="Large Image" />
          <span className="mt-[-6%] border p-1 max-sm:text-sm"><i className="bi bi-patch-check-fill mr-1" style={{ color: "#63f74fff" }}></i>Currently building cool things.</span>
        </div>

      </section>
  );
}



 

  
