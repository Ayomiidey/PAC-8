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
            <button className="bg-purple-800 px-8 py-2 text-white mt-4 rounded-md hover:bg-purple-900 transition-transform duration-300 transform hover:scale-105">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full mt-12 px-6">
        <h1 className="text-center font-sans text-3xl mb-6">
          Shop by Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center lg:mx-[10rem]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button - Always Visible on Mobile, Hover Effect for Larger Screens */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 
          transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 
          transition-transform duration-300"
              >
                <button
                  className="w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                  onClick={() => handleCategory(category.name)}
                >
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
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

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useFilter } from "./FilterContext";

// interface Product {
//   id: number;
//   title: string;
//   category: string;
//   thumbnail: string;
//   price: number;
//   rating: number;
// }

// interface FetchProduct {
//   products: Product[];
// }

// const HomePage = () => {
//   const [categories, setCategories] = useState<
//     { name: string; image: string }[]
//   >([]);
//   const navigate = useNavigate();
//   const { setSelectedCategory } = useFilter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data: FetchProduct = await res.json();
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

//   const handleCategory = (category: string) => {
//     setSelectedCategory(category);
//     navigate("/products");
//   };

//   return (
//     <div className="w-full bg-purple-50">
//       <div className="relative w-full h-[600px] overflow-hidden">
//         <div className="absolute inset-0 bg-purple-900/40 z-10" />
//         <img
//           src="/api/placeholder/1920/600"
//           alt="Homepage Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 w-full max-w-4xl px-6">
//           <h2 className="text-5xl font-bold mb-6 animate-fade-in">
//             WELCOME TO PAC 8
//           </h2>
//           <p className="text-2xl mb-8 font-medium text-purple-100">
//             Discover Millions of Amazing Products
//           </p>
//           <Link to="/products">
//             <button className="bg-purple-600 px-12 py-4 text-xl text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
//               EXPLORE NOW
//             </button>
//           </Link>
//         </div>
//       </div>

//       <div className="w-full py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-center font-sans text-4xl mb-12 text-purple-900 font-bold">
//             Browse Categories
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="aspect-square bg-purple-100">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <button
//                     className="w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg"
//                     onClick={() => handleCategory(category.name)}
//                   >
//                     {category.name.charAt(0).toUpperCase() +
//                       category.name.slice(1)}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="w-full py-16 bg-purple-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-purple-900 mb-6">
//             Why Choose Us?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Fast Delivery",
//                 description:
//                   "Get your products delivered at your doorstep within 24 hours",
//               },
//               {
//                 title: "Secure Payment",
//                 description:
//                   "Multiple payment options with 100% secure checkout process",
//               },
//               {
//                 title: "24/7 Support",
//                 description:
//                   "Round the clock customer support for all your queries",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
