import React, { useState } from "react";

const FlamesCalculator = () => {
  const [firstName, setFirstname] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [error, setError] = useState("");

  const calculateRelationship = () => {

    if (!firstName.trim() || !secondName.trim()) {
      setError('Please Enter valid input');
      return;
    }

    const lowercaseFirstName = firstName.toLowerCase();
    const lowercaseSecondName = secondName.toLowerCase();
    let remainingName1 = lowercaseFirstName;
    let remainingName2 = lowercaseSecondName;

    for (let char of lowercaseFirstName) {
      if (lowercaseSecondName.includes(char)) {
        remainingName1 = remainingName1.replace(char, '');
        remainingName2 = remainingName2.replace(char, '');
      }
    }

    const lengthSum = (remainingName1.length + remainingName2.length) % 6;

    switch (lengthSum) {
      case 1:
        setRelationshipStatus('Friends');
        break;
      case 2:
        setRelationshipStatus('Love');
        break;
      case 3:
        setRelationshipStatus('Affection');
        break;
      case 4:
        setRelationshipStatus('Marriage');
        break;
      case 5:
        setRelationshipStatus('Enemy');
        break;
      case 0:
        setRelationshipStatus('Siblings');
        break;
      default:
        break;
    }
  };

  const clearInputs = () => {
    setFirstname("");
    setSecondName("");
    setRelationshipStatus("");
    setError("");
  };

  return (
    <div>
      <input type="text" value={firstName} name="name1" placeholder="Enter first name" onChange={(e) => setFirstname(e.target.value)} data-testid="input1" />
      <input type="text" value={secondName} name="name2" placeholder="Enter second name" onChange={(e) => setSecondName(e.target.value)} data-testid="input2" />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
      <button onClick={clearInputs} data-testid="clear">Clear</button>
      <h3 data-testid="answer">{error ? error : relationshipStatus}Marriage</h3>
    </div>
  );
};

export default FlamesCalculator;
