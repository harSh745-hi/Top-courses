#Component "Card" 
import React from "react"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props)=>
{
  let course =props.course;
  let likedCourse =props.likedCourse;
  let setCourse =props.setLikedCourse;


  function  clickHandler()
  {
          // logic 
          if(likedCourse.includes(course.id))
          {
            setCourse(  (prev) => prev.filter( (courseId)  => (courseId !== course.id) ) );
            toast.warning("like removed");
          }

          else {
              
              //  liked ahe 
              if(likedCourse.length === 0 )
              {
                setCourse([course.id]);
              }
              else {
                // non-empty course lile 
                setCourse( (prev) => [...prev,course.id]); 
              }
              toast.success("Liked Successfully");

          }
      }

      return(
        <div className="w-[300px] bg-bgDark bg-opacity-80  rounded-md overflow-hidden ">
       
       <div className="relative ">
        <img src={course.image.url}></img>

         <div className="w-[34px] h-[34px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
            <button onClick={clickHandler}>
             {
              likedCourse.includes(course.id)  ? 
              (<FcLikePlaceholder fontSize="1.75rem"/>) :
               ( <FcLike fontSize="1.75rem"/>)
             }
            </button>
        </div>

       </div>
    
         <div className=" p-4">
              <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
              <p className="mt-2 text-white">
              
              {
                course.description.length > 100 ? 
                (course.description.substr(0,100)) + "..."
                : (course.description) 
              }</p>
         </div>
        </div>
      )
}

export default Card

