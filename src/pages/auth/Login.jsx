import { useNavigate } from "react-router-dom";
import { useState } from "react";
import users from "../../data/usersData";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user.role === "kitchen") {
      navigate("/kitchen/dashboard");
    } else if (user.role === "waiter") {
      navigate("/waiter/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gray-50">
      
      <div className="w-full md:w-[45%] lg:w-[40%] bg-white flex flex-col justify-center px-10 sm:px-16 lg:px-20 z-20 relative shadow-[10px_0_30px_rgba(0,0,0,0.1)]">
        
        <div className="absolute inset-y-0 right-0 w-[120px] translate-x-full hidden md:block overflow-hidden pointer-events-none">
          <svg className="w-full h-full text-white drop-shadow-[-10px_0_15px_rgba(0,0,0,0.05)]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 C100,25 100,75 0,100 Z" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-4.418 0-8 3.134-8 7v1h16v-1c0-3.866-3.582-7-8-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v-1m0 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Dine<span className="text-orange-500">Flow</span>
          </h1>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-500 font-medium text-sm">Login to manage your restaurant efficiently</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-7 w-full max-w-sm">
          
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Id" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 focus:border-orange-500 py-2 outline-none transition-colors text-gray-700 font-medium bg-transparent text-sm placeholder-gray-400"
              required
            />
          </div>

          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 focus:border-orange-500 py-2 outline-none transition-colors text-gray-700 font-medium bg-transparent text-sm placeholder-gray-400"
              required
            />
          </div>
          
          <div className="flex justify-end mt-[-15px]">
            <a href="#" className="text-xs font-semibold text-gray-500 hover:text-orange-500 transition-colors">
              Forget password?
            </a>
          </div>

          <button 
            type="submit" 
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 w-fit mx-auto"
          >
            Log in
          </button>
        </form>

      </div>

      <div className="hidden md:block absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
          alt="Delicious Restaurant Food Spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  );
}

export default Login;