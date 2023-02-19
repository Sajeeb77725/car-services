import React from "react";
import expert_1 from "../../../images/experts/expert-1.jpg";
import expert_2 from "../../../images/experts/expert-2.jpg";
import expert_3 from "../../../images/experts/expert-3.jpg";
import expert_4 from "../../../images/experts/expert-4.jpg";
import expert_5 from "../../../images/experts/expert-5.jpg";
import expert_6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Mahfuz", img: expert_1 },
    { id: 2, name: "Sajeeb", img: expert_2 },
    { id: 3, name: "Avik", img: expert_3 },
    { id: 4, name: "Deben", img: expert_4 },
    { id: 5, name: "Raz", img: expert_5 },
    { id: 6, name: "Sifat", img: expert_6 },
  ];
  return (
    <div id="experts" className="container">
      <h2 className="text-primary text-center mt-5">Our Experts.</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
