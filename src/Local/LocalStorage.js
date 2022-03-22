// add local storage
const addCart=id=>{
   let shoppping={}
   const jodithake=localStorage.getItem('cart');
   if(jodithake){
       shoppping=JSON.parse(jodithake)
   }
 
   const ache=shoppping[id];
   if(ache){
       shoppping[id]=ache+1
   }else{
    shoppping[id]=1
   }
   localStorage.setItem('cart',JSON.stringify(shoppping))
}


const removeLocal=(id)=>{
    const storecard=localStorage.getItem('cart');
    if(storecard){
        const shoppingcard=JSON.parse(storecard);
        if(id in shoppingcard){
         delete shoppingcard[id]
         localStorage.setItem('cart',JSON.stringify(shoppingcard))
        }
    }
}
export{
    addCart,
    removeLocal
}