// import React from "react";
// import "./Result.css";
// import content from "./Content";

// const Result = () => {
//   function truncate(string, n) {
//     return string?.length > n ? string.substring(0, n - 1) + "..." : string;
//   }
//   return (
//     <div className="result">
//       <h2>Results for "Singapore" </h2>
//       <div className="result-container">
//         {content.map((item) => (
//           <div className="result-banner">
//             <img className="result-image" src={item.imgURL} alt="Image" />
//             <div className="result-details">
//               <h3 className="result-title">{item.title}</h3>
//               <p className="result-description">{truncate(item.description, 50)}</p>
//               <p className="result-rating">{item.rating}</p>
//               <div className="result-bottom">
//                 <p className="result-price">
//                   <i class="fa-solid fa-indian-rupee-sign fa-xs"> </i>
//                   {item.price}
//                 </p>
//                 <i class="fa-solid fa-circle-chevron-down fa-xl"></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Result;





///       


// import React, { useState } from "react";
// import "./Result.css";
// import content from "./Content";

// const Result = () => {
//   function truncate(string, n) {
//     return string?.length > n ? string.substring(0, n - 1) + "..." : string;
//   }

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div className="result">
//       <h2>Results for "Singapore" </h2>
//       <div className="result-container">
//         {content.map((item, index) => (
//           <div
//             className="result-banner"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}>
//             <img className="result-image" src={item.imgURL} alt="Image" />
//             {hoveredIndex === index && (
//               <video src={item.videoURL} autoPlay loop muted disablePictureInPicture></video>
//             )}
//             <div className="result-details">
//               <h3 className="result-title">{item.title}</h3>
//               <p className="result-description">{truncate(item.description, 50)}</p>
//               <p className="result-rating">{item.rating}</p>
//               <div className="result-bottom">
//                 <p className="result-price">
//                   <i className="fa-solid fa-indian-rupee-sign fa-xs"> </i>
//                   {item.price}
//                 </p>

//                 <i className="fa-solid fa-circle-chevron-down fa-xl"></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Result;



import React, { useState } from "react";
import "./Result.css";
import content from "./Content";

const Result = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="result">
      <h2>Results for "Singapore" </h2>
      <div className="result-container">
        {content.map((item, index) => (
          <div
            className="result-banner"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index} // Add a key prop for optimization (assuming `index` is unique)
          >
            <img className="result-image" src={item.imgURL} alt="Image" />
            {hoveredIndex === index && (
              <video src={item.videoURL} autoPlay loop muted disablePictureInPicture></video>
            )}
            <div className="result-details">
              <h3 className="result-title">{item.title}</h3>
              <p className="result-description">{truncate(item.description, 50)}</p>
              <p className="result-rating">{item.rating}</p>
              <div className="result-bottom">
                <p className="result-price">
                  <i className="fa-solid fa-indian-rupee-sign fa-xs"> </i>
                  {item.price}
                </p>
                <i className="fa-solid fa-circle-chevron-down fa-xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
