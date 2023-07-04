import React,{useRef, useState} from "react";
import { useCart,useDispatchCart } from "./Context";
import { useEffect } from "react";
const Body = (props) => {
  const price = useRef();
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceoptions = Object.keys(options);
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState(" ");
  
  const handletocart = async () =>{
        await dispatch({type:"Add",id:props.fooditem._id,name:props.fooditem.name,price:props.finalprice,qty:qty,size:size})
        console.log(data)
  }
  let finalprice =qty *parseInt(options[size]);
  useEffect(()=>{
    setsize(price.current.value)
  },[])
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "500px" }}
        >
          <img
            src={props.fooditem.img}
            className="card-img-top"
            alt="..."
             style={{ height: "150px", objectFit: "Fit" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.fooditem.name}</h5>
            <div classNamee="container w-100">
              <select className="m-2 h-100  bg-success rounded" onChange={(e) =>setqty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded" ref= {price} onChange={(e) =>setsize(e.target.value)}>
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">Total Price: {finalprice}/-</div>
            </div>
            <hr></hr>
            <button className=" btn bg-success justify-content:center" onClick={handletocart}>Add to My cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
