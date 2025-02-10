// import { useEffect, useState } from "react";
// import homepage1 from "../assets/images/homepage1.jpg";
// import { Link } from "react-router-dom";

// interface Product {
//   category: string;
//   thumbnail: string;
// }

// interface FetchProduct {
//   products: Product[];
// }

// const HomePage = () => {
//   const [categories, setCategories] = useState<
//     { name: string; image: string }[]
//   >([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await fetch("https://dummyjson.com/products");
//   //       const data: FetchProduct = await res.json();

//   //       const uniquecategories = Array.from(
//   //         new Set(data.products.map((product) => product.category))
//   //       );
//   //       setCategories(uniquecategories);
//   //     } catch (error) {
//   //       console.error("Error fetching", error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data: FetchProduct = await res.json();

//         // Store unique categories with one image per category
//         const uniqueCategories: { name: string; image: string }[] = [];

//         data.products.forEach((product) => {
//           const exists = uniqueCategories.find(
//             (cat) => cat.name === product.category
//           );
//           if (!exists) {
//             uniqueCategories.push({
//               name: product.category,
//               image: product.thumbnail,
//             });
//           }
//         });

//         setCategories(uniqueCategories);
//       } catch (error) {
//         console.error("Error fetching categories", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full h-screen px-5">
//       <div className="w-full h-[530px]  relative overflow-hidden">
//         <img
//           src={homepage1}
//           alt="Homepage Carousel"
//           className="w-full h-full object-cover object-top "
//         />
//         <div className="absolute left-8 top-1/2 -translate-y-1/2">
//           <h2 className="text-3xl font-bold text-white">WELCOME TO PAC 8</h2>
//           <p className="text-xl mt-2.5 font-bold text-gray-200">
//             MILLIONS+ PRODUCTS
//           </p>
//           <Link to={"/products"}>
//             <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
//               SHOP NOW
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full mt-16 px-10">
//         <h1 className="font-mono text-3xl mb-6 mx-28">Shop by Categories</h1>

//         <div className="w-full flex justify-center items-center gap-6 flex-wrap">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-between"
//             >
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <button className="px-16 mt-[16rem] rounded-md absolute bg-red-600 text-white py-2 text-center font-semibold hover:bg-red-700 transition">
//                 {category.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// import { useEffect, useState } from "react";
// import homepage1 from "../assets/images/homepage1.jpg";
// import { Link } from "react-router-dom";

// interface Product {
//   category: string;
//   thumbnail: string;
// }

// interface FetchProduct {
//   products: Product[];
// }

// const HomePage = () => {
//   const [categories, setCategories] = useState<
//     { name: string; image: string }[]
//   >([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await fetch("https://dummyjson.com/products");
//   //       const data: FetchProduct = await res.json();

//   //       const uniquecategories = Array.from(
//   //         new Set(data.products.map((product) => product.category))
//   //       );
//   //       setCategories(uniquecategories);
//   //     } catch (error) {
//   //       console.error("Error fetching", error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data: FetchProduct = await res.json();

//         // Store unique categories with one image per category
//         const uniqueCategories: { name: string; image: string }[] = [];

//         data.products.forEach((product) => {
//           const exists = uniqueCategories.find(
//             (cat) => cat.name === product.category
//           );
//           if (!exists) {
//             uniqueCategories.push({
//               name: product.category,
//               image: product.thumbnail,
//             });
//           }
//         });

//         setCategories(uniqueCategories);
//       } catch (error) {
//         console.error("Error fetching categories", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full h-screen px-5">
//       <div className="w-full h-[530px]  relative overflow-hidden">
//         <img
//           src={homepage1}
//           alt="Homepage Carousel"
//           className="w-full h-full object-cover object-top "
//         />
//         <div className="absolute left-8 top-1/2 -translate-y-1/2">
//           <h2 className="text-3xl font-bold text-white">WELCOME TO PAC 8</h2>
//           <p className="text-xl mt-2.5 font-bold text-gray-200">
//             MILLIONS+ PRODUCTS
//           </p>
//           <Link to={"/products"}>
//             <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
//               SHOP NOW
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full mt-16 px-10">
//         <h1 className="font-mono text-3xl mb-6 mx-28">Shop by Categories</h1>

//         <div className="w-full flex justify-center items-center gap-6 flex-wrap">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-between"
//             >
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <button className="px-16 mt-[16rem] rounded-md absolute bg-red-600 text-white py-2 text-center font-semibold hover:bg-red-700 transition">
//                 {category.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import { useEffect, useState } from "react";
import homepage1 from "../assets/images/homepage1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "./FilterContext";

interface Product {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  price: number;
  rating: number;
}

interface FetchProduct {
  products: Product[];
}

const HomePage = () => {
  const [categories, setCategories] = useState<
    { name: string; image: string }[]
  >([]);
  // const [popularProduct, setPopularProduct] = useState<Product[]>([]);

  const navigate = useNavigate();

  const { setSelectedCategory } = useFilter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchProduct = await res.json();

        // Store unique categories with one image per category
        const uniqueCategories: { name: string; image: string }[] = [];

        data.products.forEach((product) => {
          const exists = uniqueCategories.find(
            (cat) => cat.name === product.category
          );
          if (!exists) {
            uniqueCategories.push({
              name: product.category,
              image: product.thumbnail,
            });
          }
        });

        // const popular = data.products.sort((a, b) => b.rating - a.rating);

        setCategories(uniqueCategories);
        // setPopularProduct(popular);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchData();
  }, []);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    navigate("/products");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[530px] overflow-hidden">
        <img
          src={homepage1}
          alt="Homepage Carousel"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
          <h2 className="text-4xl font-bold">WELCOME TO PAC 8</h2>
          <p className="text-xl mt-2 font-semibold text-gray-200">
            MILLIONS+ PRODUCTS
          </p>
          <Link to="/products">
            <button className="bg-red-600 px-8 py-2 text-white mt-4 rounded-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Shop by Categories */}
      <div className="w-full mt-12 px-6">
        <h1 className="text-center font-sans text-3xl mb-6">
          Shop by Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center lg:mx-[10rem]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="w-full h-3/4 bg-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%]">
                <button
                  className="w-full px-6 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                  onClick={() => {
                    handleCategory(category.name);
                  }}
                >
                  {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-10 mx-[10rem] ">
        <h1 className="text-center font-sans text-3xl mb-6">Our BestSeller</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProduct.slice(0, 8).map((product) => (
            <div key={product.id} className="flex flex-col h-full">
              <div className="flex-1 bg-slate-50">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-red-600 font-bold">${product.price}</p>

                <button
                  className="mt-4 px-6 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
