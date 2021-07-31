import React from 'react';
import '../css/moving.css';
const Movingbg = () => {
    let triangles = [];
    for(let i = 0; i < 100 ; i++){
      if(i%2 ===0){
        triangles.push("circle")
      }
      else{
        triangles.push("triangle")
      }

      
    }
    return (
        <div className="bg-wrapper">
            {triangles.map((item,i) => {
                return <span className={item} key={`trig${i}`}></span>
            })}
        </div>
    );
}

export default Movingbg;
