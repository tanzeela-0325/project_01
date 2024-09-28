import Image from "next/image";
import myProfile from "../../src/public/myProfile.jpg"
import Header from "@/components/header";


export default function Home() {
  return (
    
    <div className="main">
      <Header/>
      
     <div id="main-container">
     <div>
      <div id="heading01"><b>Hello!</b> <br />
      <b>I Im Tanzeela syeda</b></div>  <br />
      <span id="heading02">I Am Nent.js Developer</span>
      <p className="heading03 ">I am a student of GIAIC,quater 02: but curently i learning
      <i className="heading03"> "next.js"</i> Language in this <b className="heading03">Quater 02:</b></p>
       
      </div>

      <div>
      <Image src={myProfile}
       alt="my photo"
       width={200}
       height={200}
       className="w-[140px] h-[140px] ml-[50px] rounded-full mr-[60px] mt-6"  />
      
    
      </div>
      
      
      </div>
    </div>
    

  )
}