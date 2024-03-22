// // This component should be placed at a higher level in your React app
// // where it can be mounted once and handle token updates globally

// import React, { useEffect } from "react";

// const TokenManager = () => {
//   useEffect(() => {
//     // Function to update token in header
//     const updateTokenInHeader = () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         // Update token in the header here (e.g., via Axios interceptors)
//         // Example:
//         // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       }
//     };

//     // Listen for changes to the token in localStorage
//     window.addEventListener("storage", updateTokenInHeader);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("storage", updateTokenInHeader);
//     };
//   }, []);

//   // This component doesn't need to render anything
//   return null;
// };

// export default TokenManager;
