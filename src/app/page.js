"use client"

import { createGuest } from "@/services/supabase-api/guest";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    const response = await createGuest({ name: inputValue })

    console.log('response', response);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Continuar</button>
      </form>
    </>
  );
}
