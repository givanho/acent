import React from "react";
import { AuthContextProvider } from "./context/context";
import Home from "./screens/home";
function App() {
  return (
    <AuthContextProvider>
    
      <Home />
      
   
    </AuthContextProvider>
  );
}

export default App;
