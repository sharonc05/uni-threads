
import './ProductPage.css';
import Post from "./Components/Post";
import React from 'react';
// import Button from 'react';

function ProductPage() {
  return (
    <div className="ProductPage">
        <h1>
          Gallery
        </h1>
        <div className="relative flex justify-center">
            <div className="mb-3 w-96"> {/* Adjust the width as needed */}
            <div className="relative mb-4 flex w-full items-center">
                <input
                type="search"
                className="search-input flex-1 rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary" 
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />

                {/* Search icon */}
                <span className="search-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ width: '15px', height: '15px' }}>
                    <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
                </span>
            </div>
            </div>
        </div>
        <div className='mt-20'> {/*to make space for the search bar*/}
            <Post />
        </div>
        {/* <Button>Create New Post</Button> */}
    </div>
  );
}

export default ProductPage;


// import './App.css';
// import Post from "./Components/Post";
// import React from 'react';

// function ProductPage() {
//   return (
//     <div className="ProductPage">
//       <h1>Gallery</h1>

//       <div className="search-container">
//         <input
//           type="search"
//           className="search-input"
//           placeholder="Search"
//           aria-label="Search"
//           aria-describedby="button-addon2" />

//         {/* Search icon */}
//         <span className="search-icon">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             style={{ width: '15px', height: '15px' }}>
//             <path
//               fillRule="evenodd"
//               d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
//               clipRule="evenodd" />
//           </svg>
//         </span>
//       </div>

//       <div className="mt-20">
//         <Post />
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
