import React, { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function ({ label, id, ...props }: InputProps) {
  return <p>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props}></input>
  </p>
}