import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col ">
      <Navbar/>
      <main className="h-96 flex items-center justify-center">
        <h3>Items Container</h3>
      </main>
      <footer className="bg-green-300">
        <h4>Footer</h4>
      </footer>
    </div>
  );
}

export default App;