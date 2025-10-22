'use client'
import { useRouter } from "next/navigation";

export default function MainPage() {
  const route = useRouter();
  
  return (
     <section className="mt-[10vh] mx-[5%] flex items-center justify-between">
        <div>
          <h1 className="text-4xl leading-[130%] font-medium">Hello, I am <span className="text-pink-300">Moses</span>,<br /> a full-stack <span className="text-pink-300">software developer.</span></h1>
          <p className="font-light text-lg mt-[3vh]">I build scalable and efficient web applications where front-end<br /> meets back-end.</p>

          <button className="mt-[4vh] p-[1%] border border-pink-300 transition-all duration-300 hover:bg-pink-300" onClick={() => route.push('/contact')}>Contact me !!</button>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-[75%]" src="ProfileImage.png" alt="Large Image" />
          <span className="mt-[-6%] border p-[1%]"><i className="bi bi-patch-check-fill mr-1" style={{ color: "#63f74fff" }}></i>Currently building cool things.</span>
        </div>

      </section>
  );
}



 

  
