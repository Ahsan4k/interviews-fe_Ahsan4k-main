import React from "react";
import "./index.css";
import data from "./data.json";

const Tree = () => {
  const [animals, setAnimals] = React.useState({ textBox1: "", textBox2: "" });
  const [animalData, setAnimalData] = React.useState(data);

  const handleAddChild = (event, index) => {
    if (event.key === "Enter") {
      if (Object.keys(animals).length > 0) {
        let anmData = [...animalData];
        anmData[index].children.push({ name: event.target.value });
        setAnimalData([...anmData]);
        setAnimals("");
      }
    }
  };

  return (
    <div className="tree">
      <div className="node">
        <span>Animals</span>
        {animalData?.map((item, index) => (
          <div key={index} className="children">
            <div className="node">
              <span>{item.name}</span>
              <input
                type="text"
                value={index === 0 ? animals.textBox1 : animals.textBox2}
                onChange={(event) => {
                  if (index === 0) {
                    setAnimals({ textBox1: event.target.value });
                  } else {
                    setAnimals({ textBox2: event.target.value });
                  }
                }}
                onKeyDown={(event) => handleAddChild(event, index)}
              />
              {item.children.map((itm, indx) => (
                <div key={indx} className="children">
                  <div className="node">
                    <span>{itm.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tree;
