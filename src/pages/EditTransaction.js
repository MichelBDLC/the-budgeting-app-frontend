import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditTransaction() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    amount: 0,
    date: "",
    category: "",
    origin: "",
  });

  useEffect(() => {
    axios.get(`${API}/transactions/${id}`)
    .then((response) => {

        setForm({

          name: response.data.name,
          amount: response.data.amount,
          date: response.data.date,
          category: response.data.category,
          origin: response.data.origin,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${id}`, form)
      .then(() => {
        navigate(`/transactions/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <br />
      <button onClick={() => navigate(`/transactions/${id}`)} className="gobackbtn"> Go Back </button>
      <br />
      <div className="form">
        <br />
        <h2> Edit Transaction </h2>
        <br />
      <form onSubmit={handleSubmit}>
        <br />
        <div>
        <label> Name: </label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        </div>
        <br />
        <div>
        <label> Amount: </label>
        <input type="number" name="amount" value={form.amount} onChange={handleChange} />
        </div>
        <br />
        <div>
        <label> Date: </label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        </div>
        <br />
        <div>
        <label> Category: </label>
        <input type="text" name="category" value={form.category} onChange={handleChange} />
        </div>
        <br />
        <div>
        <label> Origin: </label>
        <input type="text" name="origin" value={form.origin} onChange={handleChange} />
        </div>
        <br />
        <button type="submit"> Save </button>
      </form>
      </div>
    </div>
  );
}
