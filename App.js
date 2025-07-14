  import React from "react";
  import { useEffect, useState } from "react";
  import {apiUrl,filterData} from "./data"
  import Navbar from  "./components/Navbar"
  import Cards from "./components/Cards"
  import Filter from "./components/Filter"
  import { toast } from "react-toastify";
  import Spinner from "./components/Spinner"


  const  App = () => 
  {

 const [courses,setCourses] = useState(null);
 const[loading,setLoading] = useState(true);
 const[category,setCategory] =useState(filterData[0].title);
 const[error,setError] =useState(null);

 async function fetchData()
 {
  setLoading(true);
   try{
    let  res = await fetch(apiUrl);

    if(!res.ok)
    {
      throw new error(`Error ${res.status} : ${res.statusText} `);
    }

    let outdata= await res.json();
        
    // output
   setCourses(outdata.data);
  }
  catch(error){
      
      if(error.message.includes("404") ) 
      {
        setError("404- Data not Found ");
      }
      else{
        setError("failed to fetch data");
      }
      
  }
  setLoading(false);
 } 


   useEffect( ()=>
  {
   fetchData();
   },[]);

 

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

       <div >
              <Navbar/>
      </div>
       
       <div className="bg-bgDark2">
         <div>
               <Filter   filterData ={filterData} 
               setCategory={setCategory} 
               category={category}/>
       </div>
     
     <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h[50vh]">
          {
          loading ? (<Spinner/>) : (<Cards courses ={courses}  category={category} />)
        }
     </div>

       </div>
     
       
   
    </div>
  );
};

export default App
  
