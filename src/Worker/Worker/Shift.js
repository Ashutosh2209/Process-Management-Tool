import React from "react";
<<<<<<< Updated upstream
import Axios from 'axios';
import { useState } from 'react';
=======
import Axios from "axios";
import { useState, useEffect } from "react";
>>>>>>> Stashed changes
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function Shift() {
<<<<<<< Updated upstream
  var date = new Date();
  let dt = date.toISOString().slice(0, 10);
  const [s_date, curDate] = useState(dt);
  const [total_picks, setTpicks] = useState(0);
  const [loom_no, setLoom] = useState(0);

  const submitShiftData = () => {
    let dt1 = date.toISOString().slice(0, 10);
    curDate(dt1);
    // console.log(dt1)
    Axios.post('http://localhost:3006/shiftInsert', {
      s_date: s_date,
      total_picks: total_picks,
      loom_no: loom_no
    }).then(() => {
      alert("successful insert");
    })
=======
    var date = new Date();
    // date.getDate();
    var curDate = date.toISOString().slice(0, 10);

    const [data, setData] = useState([
    ]);
  
    const [form, setForm] = useState({
      date: curDate,
      warped_yarn_received: "",
      order_no: "",
      loom: "",
      shift: "",
      total_picks : "",
      waste_weight: "",
    });
  // const submitShiftData = () => {
  //   let dt1 = date.toISOString().slice(0, 10);
  //   curDate(dt1);
  //   Axios.post("http://localhost:3006/shiftInsert", {
  //     s_date: s_date,
  //     total_picks: total_picks,
  //     loom_no: loom_no
  //   }).then(() => {
  //     alert("successful insert");
  //   });
  // };

  const [loom, setLoom] = useState();


  useEffect((e) => {
    Axios
      .get("http://localhost:3006/shiftInsert")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    Axios
      .post("http://localhost:3006/shiftInsert", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      date: curDate,
      warped_yarn_received: "",
      order_no: "",
      loom: "",
      shift: "",
      total_picks : "",
      waste_weight: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value,
      };
    });
  }

  const handleLoomNo = (e) => {
    setLoom(e.target.value);
>>>>>>> Stashed changes
  };

  function createSelectItems() {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items.push(
      <option key={data[i].order_no} value={data[i].order_no}>
        {data[i].order_no+" - "+data[i].company}
      </option>);
    }
    return items;
  }

  return (
<<<<<<< Updated upstream
    <div class="login">
      <div class="form">
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
        <h2>Shift Form</h2>

        {/* <input type="date" placeholder="Date" required
          onChange={(e) => {
            setDate(e.target.value);
          }} /> */}
        {/* <input type="number" placeholder="Order NO" required /> */}
        <input type="number" placeholder="Loom" required
          onChange={(e) => {
            setLoom(e.target.value);
          }} />
        {/* <input type="number" placeholder="Shift" required /> */}
        <input type="number" placeholder="Total Picks" required
          onChange={(e) => {
            setTpicks(e.target.value);
          }} />
        {/* <input type="number" placeholder="Meter" required /> */}
        <input type="submit" value="Sign In" class="submit" onClick={submitShiftData} />
=======
    <div>
      <form onSubmit={handleSubmit}>
      <div class="login">
        <Appbar processName="Shift Form" />
        <div class="form">
        <select 
            value={form.order_no}
            name="order_no"
            onChange={handleChange}
            placeholder="Order no.">
              {createSelectItems()}
        </select>
        <br/>
        <select
        value={form.loom}
        onChange={handleChange}
        name="loom"
        >
          <option value="1">Loom-1</option>
          <option value="2">Loom-2</option>
          <option value="3">Loom-3</option>
          <option value="4">Loom-4</option>
          <option value="5">Loom-5</option>
          <option value="6">Loom-6</option>
          <option value="7">Loom-7</option>
          <option value="8">Loom-8</option>
          <option value="9">Loom-9</option>
          <option value="10">Loom-10</option>
          {handleLoomNo}
        </select>
              <br />

            <div className="checkBox">
            <h3>Warped Yarn Received:</h3>
            <input
              type="checkbox"
						/>
            </div>
          <input
            type="number"
            placeholder="Shift"
            value={form.shift}
            onChange={handleChange}
            name="shift"
            required
          />
          <input
            type="number"
            placeholder="Total Picks"
            value={form.total_picks}
            onChange={handleChange}
            name="shift"
            required
          />
          <input
            type="number"
            placeholder="Waste Weight"
            value={form.waste_weight}
            onChange={handleChange}
            name="waste_weight"
            required
          />
          <br/>
        <input type="submit" value="SUBMIT" class="submit" />
        </div>
>>>>>>> Stashed changes
      </div>
      </form>
    </div>
  );
}
export default Shift;
