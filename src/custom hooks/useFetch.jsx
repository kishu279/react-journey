// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url) return;

//     try {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setData(data);
//           setLoading(false);
//         });
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;
