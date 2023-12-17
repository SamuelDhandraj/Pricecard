import React from 'react'

function  Pricecard() {
  return (
  

    <div className='Container'>
      <header>
        <div className='d-flex align-items-center ms-auto'>
          <a href='#'className='navbar-brand fs-4'>Price Table</a>
      <nav>
          <strong><a href=''>Pricing</a></strong>
          <strong><a href=''>Contact</a></strong>
      </nav>
      </div>
      <div className='text-center w-75 my-4  mx-auto'>
        <h1>Pricing</h1>
      </div>
      </header>
      <div className='price-row'>
<div className='price-col'>
          <h6>Free</h6>
       <h4>$0/Month</h4> 
       <ul>
     <li>Single User</li>
     <li>50GB Storage</li>
     <li>Unlimited Public Projects</li>
     <li>Community Access</li>
     <li>Unlimited private Projects</li>
     <li>Dedicated Phone Support</li>
     <li>Free Subdomain</li>
     <li>Monthly status Reports</li>
     </ul>
     <div>
    <button>Add To Cart</button>
    </div>
</div>
  <div className='price-col'>
            <h6>Plus</h6>
          <h4>$9/Month</h4>
          <ul> 
         <li>Single User</li>
         <li>50GB Storage</li>
         <li>Unlimited Public Projects</li>
         <li>Community Access</li>
         <li>Unlimited private Projects</li>
         <li>Dedicated Phone Support</li>
         <li>Free Subdomain</li>
         <li>Monthly status Reports</li>
        </ul>
    <div>
         <button>Add To Cart</button>
         </div>
  </div>
     <div className='price-col'>
              <h6>Pro</h6>
           <h4>$49/Month</h4>
           <ul> 
     <li>Single User</li>
     <li>50GB Storage</li>
     <li>Unlimited Public Projects</li>
     <li>Community Access</li>
     <li>Unlimited private Projects</li>
     <li>Dedicated Phone Support</li>
     <li>Free Subdomain</li>
     <li>Monthly status Reports</li>
      </ul>
   <div>
     <button>Add To Cart</button>
     </div>
      </div> 
   </div>
  </div>

  
    
  )
}

export default  Pricecard
