import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
function DownTime() {
  var date = new Date();
  // date.getDate();
  // var curDate = date.toISOString().slice(0, 10);
  const [form, setForm] = useState({
    // date: curDate,
    ///Commented auto date : because use can fill previous days downtime on next day////
    date: "",
    loom: "",
    shift: "",
    weaver: "",
    downtime: "",
    remark: ""

  });

  const [loom, setLoom] = useState();

  function handleSubmit(e) {

    e.preventDefault();

    axios.post("http://localhost:3006/downtime", form)
      .then(res => {
        console.log(res);
        alert("successful insert");
      })
      .catch(err => {
        console.log(err);
      });

    setForm({
<<<<<<< Updated upstream
=======
      // date: curDate,
>>>>>>> Stashed changes
      date: "",
      loom: "",
      shift: "",
      weaver: "",
      downtime: "",
      remark: ""

    });


  }

  function handleChange(event) {

    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value
      }
    });
  }

  const handleLoomNo = (e) => {
    setLoom(e.target.value);
  };

  return (
<<<<<<< Updated upstream
    <form onSubmit={handleSubmit}>
      <div class="login">
        <div class="form">
          <NavLink to="/">
            <button>Back</button>
          </NavLink>
          <h2>Downtime Form</h2>

          {/* <input type="date" vlaue={form.date} onChange={handleChange} name="date" placeholder="Date" required /> */}
          <input type="number" value={form.loom} onChange={handleChange} name="loom" placeholder="Loom" required />
          <input type="number" value={form.shift} onChange={handleChange} name="shift" placeholder="Shift" required />
          <input type="text" value={form.weaver} onChange={handleChange} name="weaver" placeholder="Weaver Name" required />
          <input type="time" value={form.downtime} onChange={handleChange} name="downtime" placeholder="Downtime" required />
          <input type="string" value={form.remark} onChange={handleChange} name="remark" placeholder="Remark" required />
          <input type="submit" value="SUBMIT" class="submit" />
        </div>
=======
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div class="login">
            <Appbar processName="Downtime Form" />
            <div class="form">
            <input
                type="date"
                value={form.date}
                onChange={handleChange}
                name="date"
                placeholder="Date"
                required
              />
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
              <input
                type="number"
                value={form.shift}
                onChange={handleChange}
                name="shift"
                placeholder="Shift"
                required
              />
              <input
                type="text"
                value={form.weaver}
                onChange={handleChange}
                name="weaver"
                placeholder="Weaver Name"
                required
              />
              <input
                type="time"
                value={form.downtime}
                onChange={handleChange}
                name="downtime"
                placeholder="Downtime"
                required
              />
              <input
                type="string"
                value={form.remark}
                onChange={handleChange}
                name="remark"
                placeholder="Remark"
                required
              />
              <input type="submit" value="SUBMIT" class="submit" />
            </div>
          </div>
        </form>
>>>>>>> Stashed changes
      </div>
    </form>
  );
}
export default DownTime;