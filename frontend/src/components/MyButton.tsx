import React from "react";
interface MyButtonProps {
  title: string;
  disabled: boolean;
}

export default function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}
