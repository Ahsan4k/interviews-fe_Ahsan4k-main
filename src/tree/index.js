import React from "react";
import "./index.css";
import data from "./data.json";

const Tree = () => {
  const [animals, setAnimals] = React.useState("");
  const [animalData, setAnimalData] = React.useState(data);

  const handleAddChild = (event, index) => {
    console.log("index", index);
    if (event.key === "Enter") {
      if (animals.length > 0) {
        let anmData = [...animalData];
        anmData[index].children.push({ name: event.target.value });
        console.log("anmData=========>", anmData);
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
                value={animals}
                onChange={(event) => setAnimals(event.target.value)}
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
