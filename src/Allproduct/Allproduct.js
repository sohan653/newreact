import React, { useEffect, useState } from 'react';
import Detailsmodal from '../Detailsmodal/Detailsmodal';



const Allproduct = ({cart}) => {
    const [phones, setphone]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setphone(json))
    },[])

    const [color,setcolor]=useState('text-danger')
    const newColor=()=>setcolor('text-success')
    return (
        
        <div className='row g-3'>
            <h1 onClick={newColor} className={color}>All Products</h1>
            {
                phones.map(phone =>  <Showphone
                     phone={phone}
                     key={phone.id}
                     cart={cart}
                     ></Showphone>)
            }
           
        </div>
    );
};

export default Allproduct;

const Showphone=({phone,cart})=>{
    
    return(
      
           <div data-aos="flip-right"
           className="col-md-4">
           <div className="card ">
               <div className="card-img">
                   <img className='img-fluid w-50' src={phone.image} alt="" />
               </div>
        <div className="card-body">
          <h5 className="card-title">{phone.description.slice(0,12)}</h5>
          <div className="d-flex justify-content-around">
          <a href="#" onClick={cart} className="btn btn-primary">add to cart</a>
          <a href="#" className="btn btn-danger">delete</a>
          <Detailsmodal phone={phone}></Detailsmodal>
          
          </div>
        </div>
      </div>
           </div>
      
    )
}