import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProductLink(){

  return(
    <ul className="nav">
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link active" aria-current="page" to="#"><i className="fa-solid fa-shirt"></i>Fashion</Link>
  </li>
  <li className="nav-item m-3 mx-auto" >
    <Link className="nav-link" to="#"><i className="fa-solid fa-lightbulb"></i> Electronic</Link>
  </li>
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link" to="#"><i className="fa-solid fa-blender-phone"></i>Home Appliances</Link>
  </li>
  <li className="nav-item m-3 mx-auto">
    <Link className="nav-link" to="#"><i className="fa-solid fa-basket-shopping"></i>Grocery</Link>
  </li>
</ul>
    )
}

export function Products(){
  let [data,setData] = useState([{
    name:"car name",
    des:"car description",
    tags:"",
    img: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg"
  }]);
  useEffect(()=>{
      // fetch data here
  },[]);
    let formattedData = data.map(prod=>
      <div className="card col-3 m-3" style={{width: "18rem"}}>
        <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.des}</p>
                <Link to="#" className="btn btn-outline-primary">Add to Cart</Link>
            </div>
      </div>);
    return(
        <div className="container">
        <div className="row">
          {formattedData}
        </div>
        </div>
    )
}