import React, { useEffect, useState } from 'react';
import { addCart, removeLocal } from '../Local/LocalStorage';
const cosmetics=[
    {
      "_id": "6238442854eea1d939d3cfba",
      "index": 0,
      "guid": "54313605-eecd-45a0-8e7b-e68a3d17eed2",
      "isActive": false,
      "balance": "$3,617.48",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": "Shana Greer",
      "gender": "female",
      "company": "JIMBIES",
      "email": "shanagreer@jimbies.com",
      "phone": "+1 (960) 562-3856",
      "address": "166 Cypress Court, Dixie, Missouri, 6183"
    },
    {
      "_id": "62384428ef24e4275fa9eea9",
      "index": 1,
      "guid": "86197ea4-287a-4431-b30e-1cbdd983076b",
      "isActive": false,
      "balance": "$3,225.26",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": "Dollie Morton",
      "gender": "female",
      "company": "CUBICIDE",
      "email": "dolliemorton@cubicide.com",
      "phone": "+1 (813) 518-3290",
      "address": "849 Mill Street, Clara, Indiana, 5184"
    },
    {
      "_id": "623844282e0b0b803edf50dd",
      "index": 2,
      "guid": "06728adb-36a7-4c45-bd89-59e1157be3d7",
      "isActive": true,
      "balance": "$3,003.27",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "green",
      "name": "Valarie Munoz",
      "gender": "female",
      "company": "BRISTO",
      "email": "valariemunoz@bristo.com",
      "phone": "+1 (822) 521-3541",
      "address": "899 Hoyt Street, Glenville, Palau, 6040"
    },
    {
      "_id": "62384428ead5c7f3dcb3e85c",
      "index": 3,
      "guid": "70db551b-73d9-4937-ad6c-1c038e31df3d",
      "isActive": false,
      "balance": "$1,090.39",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "green",
      "name": "Jill Colon",
      "gender": "female",
      "company": "COMTRAK",
      "email": "jillcolon@comtrak.com",
      "phone": "+1 (877) 530-3004",
      "address": "224 Elizabeth Place, Malott, North Carolina, 3552"
    },
    {
      "_id": "623844281576a37ce6f51c1c",
      "index": 4,
      "guid": "09724e5e-d729-451e-8728-32418e7b78ed",
      "isActive": false,
      "balance": "$2,849.28",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "blue",
      "name": "Winifred Cunningham",
      "gender": "female",
      "company": "GEEKOSIS",
      "email": "winifredcunningham@geekosis.com",
      "phone": "+1 (910) 526-3939",
      "address": "723 Rockaway Avenue, Golconda, Alaska, 7782"
    }
  ]

const Fakedata = () => {
    
   
    return (
        <div>
            {
                cosmetics.map(cosmetic=> <New key={cosmetic.index} id={cosmetic}></New>)
            }
            
        </div>
    );
};

export default Fakedata;

const New=({id})=>{
    const {_id,index}=id
    
    const addtocart=(serial)=>{
        addCart(serial)
    }

    const removecart=(id)=>{
      removeLocal(id)
    }

    return(
        <div>
            <h2>{_id}</h2>
            <button onClick={()=>addtocart(_id)} >cart</button>
            <button onClick={()=>removecart(_id)}>remove</button>
        </div>
    )
}