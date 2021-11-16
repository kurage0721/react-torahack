import { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState('')

  const handleName = (event) => {
    //入力された値の確認
    // console.log(event.target.value)
    
    setName(event.target.value)
  }

  //現在のフォームの状況
//   console.log("Current",name)

  return (
    <input
      onChange={(event) => handleName(event)}
      type={'text'}
      value={name}
    />
  );
};

export default TextInput;