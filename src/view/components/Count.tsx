import { useState } from "react"


export const Count = () => {
  const [count, setCount] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)
  const countUp = () => {
    setCount(prov => prov + 1)
  }
  const countUp2 = () => {
    setCount2(prov => prov + 10)
  }
  return (
    <>
      <div>
        <div>{count}</div>
        <button
          children="+追加"
          onClick={countUp}
        />
      </div>
      <div>
        <div>{count2}</div>
        <Buttons.Button
          children="+追加"
          onClick={countUp2}
        />
      </div>
    </>
  )
}



import { ButtonHTMLAttributes, LabelHTMLAttributes, MouseEventHandler, ReactNode } from "react";

// ButtonProps型の定義
type ButtonProps = { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement> } & ButtonHTMLAttributes<HTMLButtonElement>;

// LabelProps型の定義
type LabelProps = { children: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>;

// ButtonsClassの型定義
interface ButtonsClassType {
  Button: React.FC<ButtonProps>;
  Label: React.FC<LabelProps>;
}

// Buttonsクラスの定義
class ButtonsClass implements ButtonsClassType {
  Button = ({ children, onClick, ...props }: ButtonProps) => {
    return (
      <button {...props} onClick={onClick}>{children}</button>
    );
  }

  Label = ({ children, ...props }: LabelProps) => {
    return (
      <label {...props}>{children}</label>
    );
  }
}

// Buttonsクラスのインスタンスを作成
const Buttons = new ButtonsClass();