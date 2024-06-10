import React from "react";
import "./board.css";
import List from "./list";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";

const Info = [
  {
    img: img1,
    name: "Parthiban Munusamy",
    birthday: "1977-04-11",
  },
  {
    img: img2,
    name: "Shanmugalakshmi Chandrasekaran",
    birthday: "1986-01-11",
  },
  {
    img: img3,
    name: "Sangamithra Parthiban",
    birthday: "2009-10-28",
  },
  {
    img: img4,
    name: "Shanmugarajan",
    birthday: "1988-01-26",
  },
  {
    img: img5,
    name: "Kasthuri Rajam",
    birthday: "1960-03-24",
  },
  {
    img: img2,
    name: "Aaru",
    birthday: "2022-04-12",
  },
  {
    img: img1,
    name: "Chandrasekaran",
    birthday: "1947-04-08",
  },
];

export default function board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Remainder</h1>

      <div className="board">
        <List info={Today(Info)}></List>
        <h2 className="upcoming text-dark">Upcoming Birthday</h2>
        <List info={Upcoming(Info, 12)} upcoming={true}></List>
      </div>
    </main>
  );
}

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay == day && currentMonth == month;
  });
  return filter;
}

// upcoming birthdays
function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay == day) return;
    return month >= currentMonth && month <= currentMonth + toMonth;
  });

  return filter;
}
