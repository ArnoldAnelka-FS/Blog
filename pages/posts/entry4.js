import Image from "next/image"
import Link from "next/link"
import Format from '../../layout/format'

export default function entry4() {
    return (
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
          <Link href="/">
                  <Image src={"/images/api.jpeg"} width={600}height={400}/>
              </Link>
          </div>
          <div className="info flex justify-center flex-col">
           <div className="category">
              <Link href={"/posts/entry4"}> </Link>
              <Link href={"/posts/entry4"}>January 13, 2023</Link>
           </div>
           <div className="title">
           <Link href={"/posts/entry2"}>Best Practices for using APIs within React</Link>
           </div>
           <p className="text-gray-500 py-3">Trying to use an API in ReactJS? You’ve come to the right place. As developers, we are often creating projects in React and utilizing API's . I've put together some simple best practices to aid you with the process.

1. MongoDB-After creating your project in React, make sure you have installed MongoDB  to store the large scale of data that is received from the API you are planning to make calls from . 
2. GitHub -Set up your GitHub repository in order to deploy your website once we have reached the deployment stage.
3. Postman -Set up an account with Postman. This is a rest client that will allow us to run request codes and check our routes and make updates once its live.
4. Heroku - Set up a Heroku account. This allows you to deploy work with GIthub and deploy your website.</p>
  <h1>Anelka Arnold</h1>
          </div>
          </div>
      )
}