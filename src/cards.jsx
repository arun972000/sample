import React, { useState } from "react";
import styles from "./cards.module.css"

const Card = ({ id, title, price, increase, decrease, star }) => {
  let [add, setAdd] = useState(false)

  function icon(){
    if(star===5){
  return(    
<span><i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i></span>)
    }
    else if(star===4){
     return( <span><i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          </span>)
    }
    else{
     return( <span><i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          <i className="fa-solid fa-star" style={{color: "#ffd43b"}}></i>
          </span>)
    }
  }

  function change() {
    if (add === false) {
      setAdd(true);
      increase(id);
    } else {
      setAdd(false);
      decrease(id);
    }
  }


  return (<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" key={id}>
    <div className="card text-center">
      <div className={`${styles.head} py-5 text-center`}>
        <h1 className="tet py-5">450 x 300</h1>
      </div>
      <div className="card-body">
        <i className={add ? "fa-solid fa-heart fa-beat" : "fa-regular fa-heart"} style={{ color: "#FF0000" }}></i>
        <h5 className="card-title pt-3">{title}</h5>
        <div className="pb-5">
        <p className="card-text ">{price}</p>
        {icon()}
        </div>
        <button className="btn btn-outline-dark mt-auto" onClick={change}>{add ? "Remove from Cart" : "Add to Cart"}</button>
      </div>
    </div>
  </div>)
}

export default Card;