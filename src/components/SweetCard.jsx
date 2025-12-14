import API from "../api/axios";

export default function SweetCard({ sweet, refresh }) {
  const purchase = async () => {
    await API.post(`/sweets/${sweet._id}/purchase`);
    refresh();
  };

  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>
      <button disabled={sweet.quantity === 0} onClick={purchase}>
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}
