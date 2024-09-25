import { Products } from "./homecontent";
import { ProductLink } from "./homecontent";

export default function Home(){
    return(
       <>
       <div id="carouselExample" style={{background: 'linear-gradient(0deg,transparent -10%, rgb(138,147,129))'}} className="carousel slide">
       <div className="carousel-inner">
         <div className="carousel-item active">
           <img style={{objectFit:'contain'}} src={"https://i.ytimg.com/vi/Nd6NqbW_cos/maxresdefault.jpg"} height="500" className="d-block w-100" alt="..." />
         </div>
         <div className="carousel-item">
           <img style={{objectFit:'contain'}} src={"https://i.gadgets360cdn.com/large/story-Flipkart-Big-Billion-Days-1200x800-1602770068706.jpg"} height="500" className="d-block w-100" alt="..." />
         </div>
         <div className="carousel-item">
           <img style={{objectFit:'contain'}} src={"https://corporate.walmart.com/content/corporate/en_us/news/2024/01/09/walmart-offers-a-glimpse-into-the-future-of-retail-at-consumer-electronics-show/jcr:content/newsimage.img.jpg/1705937879889.jpg"} height="500" className="d-block w-100" alt="..." />
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
     </div> 

     <ProductLink/>
     <Products />
     </>
    )
}

