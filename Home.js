import React from 'react';

import Vehiclesulike from './vehiclesulike';
const vehiclesulike=[{
  heading:"Hatchbacks and Sedans",para:"Ideal for about 2-4 people"
},{
  heading:"SUVs",para:"Ideal for about 4-7 people"
},{
  heading:"Tempo Travellers",para:"Ideal for 8-16 people"
},{
  heading:"Buses and Mini Buses",para:"Ideal for more than 18 people"
}]



function Home() {
  return (
    <>
       
       {
        vehiclesulike.map((u)=>{
          return <Vehiclesulike key={u.heading} heading={u.heading} para={u.para}></Vehiclesulike>

        })

       }
        
      
        
    </>
  )
}

export default Home