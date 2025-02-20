// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { FcGoogle } from "react-icons/fc";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await signInWithEmailAndPassword(auth, email, password);
//       console.log(response.user.uid);
//       navigate("/");
//     } catch (error) {
//       setError(error instanceof Error ? error.message : "An error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // THIS IS MY FIREBASE GOOGLE AUTH
//   // const handleGoogleSignIn = async () => {
//   //   setIsLoading(true);
//   //   setError("");

//   //   try {
//   //     const response = await signInWithPopup(auth, new GoogleAuthProvider());
//   //     console.log(response.user.uid);
//   //     navigate("/");
//   //   } catch (error) {
//   //     setError(error instanceof Error ? error.message : "An error occurred");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   return (
// <form onSubmit={handleEmailSignIn} className="flex flex-col gap-6">
//   <div className="flex flex-col items-center gap-2 text-center">
//     <h1 className="text-2xl font-bold tracking-tight">
//       Login to your account
//     </h1>
//     <p className="text-sm text-muted-foreground">
//       Enter your email below to login to your account
//     </p>
//   </div>

//   <div className="grid gap-4">
//     {error && (
//       <div className="rounded-md bg-destructive/15 px-4 py-3 text-sm text-destructive">
//         {error}
//       </div>
//     )}

//     <div className="grid gap-2">
//       <label
//         htmlFor="email"
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         Email
//       </label>
//       <input
//         id="email"
//         type="email"
//         placeholder="m@example.com"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         disabled={isLoading}
//         required
//         className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//       />
//     </div>

//     <div className="grid gap-2">
//       <div className="flex items-center justify-between">
//         <label
//           htmlFor="password"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//         >
//           Password
//         </label>
//         <a
//           href="#"
//           className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
//         >
//           Forgot your password?
//         </a>
//       </div>
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         disabled={isLoading}
//         required
//         className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//       />
//     </div>

//     <button
//       type="submit"
//       disabled={isLoading}
//       className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-purple-800 text-white shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
//     >
//       {isLoading ? "Signing in..." : "Login"}
//     </button>

//     <div className="relative">
//       <div className="absolute inset-0 flex items-center">
//         <span className="w-full border-t"></span>
//       </div>
//       <div className="relative flex justify-center text-xs uppercase">
//         <span className="bg-background px-2 text-muted-foreground">
//           Or continue with
//         </span>
//       </div>
//     </div>

//     <button
//       type="button"
//       // onClick={handleGoogleSignIn}
//       disabled={isLoading}
//       className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
//     >
//       <FcGoogle className="mr-2 h-4 w-4" />
//       Sign in with Google
//     </button>
//   </div>

//   <div className="text-center text-sm text-muted-foreground">
//     Don't have an account?
//     <Link
//       to={"/sign-up"}
//       className="text-primary underline-offset-4 hover:underline"
//     >
//       Sign up
//     </Link>
//   </div>
// </form>
//   );
// };

// export default LoginForm;

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   GoogleLogin,
//   googleLogout,
//   CredentialResponse,
// } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";

// interface GoogleUser {
//   name: string;
//   email: string;
//   picture: string;
// }

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [user, setUser] = useState<GoogleUser | null>(null);
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     // Listen for online/offline status changes
//     const handleOnlineStatus = () => setIsOnline(navigator.onLine);
//     window.addEventListener("online", handleOnlineStatus);
//     window.addEventListener("offline", handleOnlineStatus);

//     return () => {
//       window.removeEventListener("online", handleOnlineStatus);
//       window.removeEventListener("offline", handleOnlineStatus);
//     };
//   }, []);

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await signInWithEmailAndPassword(auth, email, password);
//       console.log(response.user.uid);
//       navigate("/");
//     } catch (error) {
//       setError(error instanceof Error ? error.message : "An error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleSuccess = async (response: CredentialResponse) => {
//     if (!response.credential) {
//       setError("No credentials received from Google");
//       return;
//     }
//     try {
//       const decoded = jwtDecode<GoogleUser>(response.credential);
//       setUser(decoded);
//       localStorage.setItem("user", JSON.stringify(decoded));
//       navigate("/");
//     } catch (error) {
//       setError("Google Sign-In failed. Try again.");
//       console.error("Google Login Error:", error);
//     }
//   };

//   const handleLogout = () => {
//     googleLogout();
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <div className="flex flex-col gap-6 max-w-md mx-auto p-6">
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold tracking-tight">
//           {user ? "Welcome, " + user.name : "Login to your account"}
//         </h1>
//         <p className="text-sm text-muted-foreground">
//           {isOnline ? "" : "You are offline ⚠ "}
//         </p>
//       </div>

//       {error && (
//         <div className="rounded-md bg-red-300 px-4 py-3 text-sm text-red-600">
//           {error}
//         </div>
//       )}

//       {user ? (
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={user.picture}
//             alt={user.name}
//             className="h-12 w-12 rounded-full"
//           />
//           <p className="text-sm text-gray-600">{user.email}</p>
//           <button
//             onClick={handleLogout}
//             disabled={isLoading}
//             className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-red-600 text-white hover:bg-red-500 disabled:opacity-50"
//           >
//             {isLoading ? "Processing..." : "Sign Out"}
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleEmailSignIn} className="grid gap-4">
//           <div className="grid gap-2">
//             <label htmlFor="email" className="text-sm font-medium">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               disabled={isLoading}
//               required
//               className="w-full h-9 rounded-md border px-3 py-1 text-sm"
//             />
//           </div>

//           <div className="grid gap-2">
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="text-sm font-medium">
//                 Password
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot your password?
//               </a>
//             </div>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               disabled={isLoading}
//               required
//               className="w-full rounded-md border px-3 py-1 text-sm"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50"
//           >
//             {isLoading ? "Signing in..." : "Login"}
//           </button>

// <div className="relative">
//   <div className="absolute inset-0 flex items-center">
//     <span className="w-full border-t"></span>
//   </div>
//   <div className="relative flex justify-center text-xs uppercase">
//     <span className="bg-white px-2 text-gray-600">
//       Or continue with
//     </span>
//   </div>
// </div>

//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={() => setError("Google login failed")}
//           />
//         </form>
//       )}

//       <div className="text-center text-sm text-gray-600">
//         Don't have an account?{" "}
//         <Link to="/sign-up" className="text-blue-600 hover:underline">
//           Sign up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user.uid);
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) {
      setError("No credentials received from Google");
      return;
    }
    try {
      const decoded = jwtDecode<GoogleUser>(response.credential);
      setUser(decoded);
      localStorage.setItem("user", JSON.stringify(decoded));
      navigate("/");
    } catch (error) {
      setError("Google Sign-In failed. Try again.");
      console.error("Google Login Error:", error);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <form onSubmit={handleEmailSignIn} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          {user ? "Welcome, " + user.name : "Login to your account"}
        </h1>
        <p className="text-sm ">
          {isOnline
            ? "Enter your email below to login to your account"
            : "You are offline ⚠"}
        </p>
      </div>

      <div className="grid gap-4">
        {error && (
          <div className="rounded-md bg-red-300 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.picture}
              alt={user.name}
              className="h-12 w-12 rounded-full"
            />
            <p className="text-sm ">{user.email}</p>
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-purple-800 text-white shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
            >
              {isLoading ? "Processing..." : "Sign Out"}
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none "
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm "
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-purple-800 text-white shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Login"}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-600">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google login failed")}
              />
            </div>
          </>
        )}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          to="/sign-up"
          className="text-primary underline-offset-4 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
