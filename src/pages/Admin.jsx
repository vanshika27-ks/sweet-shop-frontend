import { useState, useEffect } from "react";
import API from "../api/axios";

export default function Admin() {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({ name:"", category:"", price:0, quantity:0 });

  const load = async () => {
    const res = await API.get("/sweets");
    setSweets(res.data);
  };

  const addSweet = async () => {
    await API.post("/sweets", form);
    load();
  };

  const remove = async (id) => {
    await API.delete(`/sweets/${id}`);
    load();
  };

  useEffect(()=>{ load(); }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Category" onChange={e=>setForm({...form,category:e.target.value})}/>
      <input type="number" placeholder="Price" onChange={e=>setForm({...form,price:e.target.value})}/>
      <input type="number" placeholder="Quantity" onChange={e=>setForm({...form,quantity:e.target.value})}/>
      <button onClick={addSweet}>Add Sweet</button>

      {sweets.map(s=>(
        <div key={s._id}>
          {s.name}
          <button onClick={()=>remove(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
