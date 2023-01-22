import Image from "next/image"
import Link from "next/link"

export default function section4() {
    return (
        <section className="py-16">
          <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-6xl pb-12 text-center"> Trending </h1>
  
          {Slide()}
  
          </div>
        </section>
      )
  }
   function Slide() {
      return(
          <div className="grid md:grid-cols-2 py-3">
          <div className="image">
          <Link href="/">
                  <Image alt="" src={"/images/api.jpeg"} width={600}height={400}/>
              </Link> <br/>
          </div>
          <div className="info flex justify-center flex-col">
           <div className="category">
              <Link href={"/posts/entry2"}></Link>
              <Link href={"/posts/entry2"}>January 13, 2023 </Link>
           </div>
           <div className="title">
           <Link href={"/posts/entry2"}>Best Practices for using APIs within React</Link>
           </div>
           <p className="text-gray-500 py-3">Trying to use an API in ReactJS? You’ve come to the right place. As developers, we are often creating projects in React and utilizing API's . I've put together some simple best practices to aid you with the process.</p>

<p>1. MongoDB-After creating your project in React, make sure you have installed MongoDB  to store the large scale of data that is received from the API you are planning to make calls from . 
3. Postman -Set up an account with Postman. This is a rest client that will allow us to run request codes and check our routes and make updates once its live.
4. Heroku - Set up a Heroku account. This allows you to deploy work with GIthub and deploy your website.</p>
  <h1>Anelka Arnold</h1>
          </div>
          </div>
      )
}