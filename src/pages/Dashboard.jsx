import { useEffect, useState } from "react";
import API from "../api/axios";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await API.get("/sweets");
    setSweets(res.data);
  };

  useEffect(() => { fetchSweets(); }, []);

  return (
    <div>
      <h2>Sweet Shop</h2>
      <button onClick={()=>window.location.href="/admin"}>Admin Panel</button>
      <div className="grid">
        {sweets.map(s => (
          <SweetCard key={s._id} sweet={s} refresh={fetchSweets} />
        ))}
      </div>
    </div>
  );
}
