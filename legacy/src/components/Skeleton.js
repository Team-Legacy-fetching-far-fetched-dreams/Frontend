import React from "react";
import "./Skeleton.css";

export default function Skeleton({ type }) {
  const SidebarSkeleton = () => (
   <div className="A-d-m">
   <div className='A-d-g'>
   <div className="Sidebarsk">
   <div className="lsk">
    <div className="lskimg"></div>
   </div>
   <div className="menusk">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
   </div>
   <div className="bottomsk">
    <div className="colorOptionsk"></div>
    <div className="colorOptionsk"></div>
   </div>
</div>
        <div className='Dashboardcontainer'>
        <div className='AdDashNavsk'> 
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search...'/>
            </div>
            <div className='items'>
                <div className='item'>
                   
                 English
                </div>
                <div className='item'>
                    
                <div className="avatarsk"></div>
                </div>
                <div className='item'>
                <div className="avatarsk"></div>
                </div>
            </div>

        </div>
    </div> 
        <div className='widgets'>
         
        </div>
        <div>
        </div>
        </div>
   </div>
   </div>


  );
  if (type === "sidebar") return <SidebarSkeleton />;
}