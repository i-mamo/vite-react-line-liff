import { ChangeEvent, useState } from "react"

export const TextInput = () => {
  const [text, setText] = useState<string>("")
  const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  return (
    <>
      <div>
        <input type="text" name="" id=""
          onChange={handleChangeInputText}
          value={text}
          placeholder="Enter some text"
        />
        <div>{text}</div>
      </div>
    </>
  )
}
