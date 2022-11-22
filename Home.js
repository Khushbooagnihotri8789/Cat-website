import React from 'react';
import { useEffect, useState } from 'react';
import Axios from "axios";


const Home = () => {
    const [catFact,setCatFact] = useState("");
 

  const url ="https://catfact.ninja/fact";

  useEffect(()=>{
    fetchCatFact();
  },[]);

  const fetchCatFact=()=> {
    Axios.get(url).then((res) => {
        setCatFact(res.data.fact);
        
    });
   };



  return (
     
 <>
 <img   style={{height:"300px",width:"fit-content",marginTop:"40px"}}  src ="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg" alt="" />
  <br />
  <br />
  < div className="App" style={{minHeight:"50vh"}}>

          <h1>Cat App</h1>
          <button onClick={fetchCatFact}>GetCatFacts</button>
          <p>{catFact}</p>

          
          
      </div>


 </>

  )
}

export default Home;