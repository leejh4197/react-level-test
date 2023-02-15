import React, { useState } from "react";
import "./accordion.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = (props) => {
  const dummyData = props.dummy;
  const [active, setActive] = useState("0");

  return (
    <div>
      <div className="accordionBox">
        {dummyData.map((el) => {
          return (
            <div className="box" key={el.id}>
              <div
                className="titleWrap"
                onClick={() =>
                  setActive((prev) => (prev === el.id ? "0" : el.id))
                }
              >
                <h3>{el.handle}</h3>
                {active === el.id ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              {active === el.id && (
                <p dangerouslySetInnerHTML={{ __html: el.panel }}></p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
