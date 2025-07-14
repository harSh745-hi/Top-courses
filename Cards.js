#Component  "Cards"

import React, { useState } from "react";
import Card from "./Card"
const Cards = (props)=>
{
     let courses =props.courses;
     let category =props.category;

       
     const[likedCourse,setLikedCourse]=useState([]);

     function getCourses() 
     {
        if(category === "All") {
                let allCourses =[];
              Object.values(courses).forEach(array => 
             {
            array.forEach(courseData => 
            {
                allCourses.push(courseData);
            }
            )

         }
         )
         return allCourses;
        }
        else {
            //   specific catageory 
            return  courses[category];
        }
     }
      

    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
             getCourses().map ( (course) =>
             {
               return  <Card key ={course.id}
                course={course} 
                likedCourse={likedCourse} 
                setLikedCourse={setLikedCourse}></Card>
             })
        }
        
 
        </div>
    );
}

export default Cards
