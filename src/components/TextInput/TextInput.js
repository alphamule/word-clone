import React from "react";

function TextInput({handleInput, disabled}) {
  const [textValue, setTextValue] = React.useState('');

  const onChange = (evt) => setTextValue(evt.target.value.toUpperCase());
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (textValue.length !== 5) {
      return false;
    }
    handleInput(textValue);
    setTextValue('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={textValue} onChange={onChange} disabled={disabled} />
    </form>
  );
}

export default TextInput;
