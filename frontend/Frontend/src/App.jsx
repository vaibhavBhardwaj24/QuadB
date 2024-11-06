import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/header";

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/getData", {
          method: "POST",
        });

        if (!res.ok) {
          throw new Error("Error fetching data");
        }

        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); //
  return (
    <div className="w-screen h-full bg-gray-800">
      <Header />
      <div className="w-full h-80 justify-evenly items-center text-teal-400 text-3xl flex">
        <p className="flex items-center flex-col">
          0.1% <p className="text-sm">5 mins</p>
        </p>
        <p className="flex items-center flex-col">
          0.96% <p className="text-sm">1 Hour</p>
        </p>
        <p className="text-7xl text-white font-bold flex items-center flex-col">
          <p className="text-sm">Best Price to trade</p>₹ 26,56,110
        </p>
        <p className="flex items-center flex-col">
          2.73%
          <p className="text-sm">1 Day</p>
        </p>
        <p className="flex items-center flex-col">
          7.51%
          <p className="text-sm">7 Days</p>
        </p>
      </div>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className=" p-4">
          <div className="w-full flex justify-between text-white text-3xl">
            <p>#</p>
            <p>Name</p>
            <p>Last Price</p>
            <p>Buy/Sell Price</p>
            <p>Difference</p>
            <p>Savings</p>
          </div>
          {response.map((res) => (
            <div
              key={res.id}
              className="w-  font-semibold justify-between text-white text-3xl p-2 rounded-lg bg-gray-500 flex my-4"
            >
              <p>{res.id}</p>
              <p> {res.name}</p>
              <p>{res.last}</p>
              <p>
                {res.buy}/{res.sell}
              </p>
              <p>{(res.sell - res.buy) / 100}</p>
              <p> {res.buy - res.sell}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
