import { Link,useLocation } from "react-router-dom";
 
function Navbar() { 

 const location=useLocation();
  return ( 
    <div className='fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gray-100/70 backdrop-blur-2xl h-16 shadow-2xl '> 
      
        <h6 className='ms-5 font-bold text-2xl text-violet-600'>Skill Swap</h6> 
      <div className="flex gap-5 "> 
       <div  
          className={`ms-5 mt-1 rounded-md w-20 h-8 flex justify-center  items-center ${ 
            location.pathname === "/home"? "bg-black text-white" : "" 
          }`} 
        > 
          <Link to="/home"><h1>Home</h1></Link>
        </div> 
       <div 
          className={`ms-5 mt-1 rounded-md w-30 h-8 flex justify-center items-center ${ 
            location.pathname === "/Browse" ? "bg-black text-white" : "" 
          }`} 
        > 
           <Link to="/Browse"><h1 className='rounded '>Browse Skills</h1></Link> 
        </div> 
       <div 
          className={`ms-5  mt-1 rounded-md w-25 h-8 flex justify-center items-center ${ 
            location.pathname === "/dashboard" ? "bg-black text-white" : "" 
          }`} 
        > 
           <Link to="/dashboard"><h1 className='rounded ' >Dashboard</h1></Link>  
        </div> 
         
 
      </div> 
      <div className='flex gap-5 items-center'> 
        <div className='border-1 rounded-md w-20 h-8 flex justify-center bg-black text-white items-center'>
          <Link to="/addskill"><h1>AddSkill</h1></Link> 
        </div>
        
        <div className='me-3 border border-gray-400 items-center w-20 flex justify-center rounded-md'> 
           <Link to="/profile/1"><h1 >Profile</h1></Link>  
        </div> 
         
      </div> 
    </div> 
  ) 
} 
 
export default Navbar