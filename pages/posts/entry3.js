import Format from '../../layout/format'
import Image from "next/image"
import Link from "next/link"
    
        export default function Entry3(){
            return(
            
               <Format>
                   <section className="py-16">
                    <div className="container mx-auto md:px-20">
                       
                    {Slide()}
                    </div>
                         </section>
               </Format>
            )
        }
        function Slide() {
            return(
                <div className="grid md:grid-cols-2 py-3">
                <div className="image">
                <a href="/">
                        <Image src={"/images/student.jpeg"} width={600}height={400}/>
                    </a>
                </div>
                <div className="info flex justify-center flex-col">
                 <div className="category">
                    <Link href={"/"}>Recent Journal Entries</Link>
                    <Link href={"/"}>-December 23, 2022</Link>
                 </div>
                 <div className="title">
                 <Link href={"/"}>Web Development:Student Edition</Link>
                 </div>
                 <p className="text-gray-500 py-3">My journey here at Full Sail University has been a whirlwind to say the least. When I first embarked on this journey to become a web developer, I wouldn't have imagined that there would be so many different avenues one can explore! I've learned tons of different ways to create a website and tons f new resources including Reactjs, Nodejs, Tailwindcss, and much much more! I can't wait to see what the rest of my journey will uncover. Come along for the ride!</p>
        <h1>Anelka Arnold</h1>
                </div>
                </div>
            )
}