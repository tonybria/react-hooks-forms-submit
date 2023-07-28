import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  const [errors, setErrors] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();
		if (firstName.length > 0) {
			const formData = { firstName: firstName, lastName: lastName };
			const dataArray = [...submittedData, formData];
			setSubmittedData(dataArray);
			setFirstName("");
			setLastName("");
			setErrors([]);
		} else {
			setErrors(["First name is required!"]);
		}
	}

	const listOfSubmissions = submittedData.map((data, index) => {
		return (
			<div key={index}>
				{data.firstName} {data.lastName}
			</div>
		);
	});


  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
