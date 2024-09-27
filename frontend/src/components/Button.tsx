import React from "react";
interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}
