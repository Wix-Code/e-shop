import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className="about1">
        <h2>About Us</h2>
        <div className="abou">
          <Link to="/"><p>Home</p></Link>
          <p>/</p>
          <span>"About Us"</span>
        </div>
      </div>
      <div className="about2">
        <p>Ebeosi Limited (a member of Ebeosi Inc. USA) is a B2B modern trade company built to fuse the power of online and offline distribution chains to drive intra-African trade and African trade to the World. </p>
        <p>We are fostering local and international trade for businesses in Nigeria using our unique ecommerce marketplace in managing products distribution and creating new markets for businesses. We play at the intersection of manufacturers and distributors thereby distinguishing ourselves in the products distribution sector and have positioned ourselves to be at the forefront of intra-African and African trade to the world.</p>
        <p>Ebeosi presents a unique platform to Nigerian Manufacturers and Merchants to showcase their products at major open markets and popular chain stores across the Country as well as to major markets in other African Countries, the UK, USA, China, Turkey and India.  It is our goal to showcase more African businesses to the immense opportunities that global export trade presents and also provide the channels through which they can maximize the opportunities that AfCFTAand AGOAprovide.</p>
        <p>The effectiveness of our business model to redefine buyers' preference and transform the economies of under-represented markets has been recognized by the US Department of Commerce through the SelectUSA Summit by the recent selection of our company among the 30 transformative tech companies at the just concluded SelectUSA Investment Summit in Washington DC, USA.</p>
        <p>The African Union has also recognized our platform as a veritable tool in the promotion of the African Continental Free Trade Agreement (AfCFTA) by inviting our company and CEO to be among the 200 delegates of the AfCFTA Business Forum with African Heads of State at the meeting of the AU in Niamey, Niger in 2019.</p>
        <p>What We Are Doing</p>
        <p>We are helping Businesses in Nigeria engage in export trade and earn foreign exchange by selling on our marketplace to the rest of Africa, the UK, USA, Turkey, China India, etc.</p>
        <p>We have built a very solid logistical framework structure by partnering with world-class logistics companies that will ensure a seamless and stress-free movement of products across countries. We have established warehouses in many countries and are in partnership with FedEx and ShipBob USA who currently deliver to more than 120 countries.</p>
      </div>
    </div>
  )
}

export default About