"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { createGuest } from "@/services/supabase-api/guest";
import { useState } from "react";
import { Styles } from "./styles";

export default function Home() {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createGuest({ name: name });

    console.log("response", response);
  };

  return (
    <Styles.Container>
      <Styles.Title>Chá de panela</Styles.Title>
      <Styles.Subtitle>Sugestão de presentes</Styles.Subtitle>
      <Styles.Form onSubmit={handleSubmit}>
        <Input
          placeholder="nome completo"
          label="Digite seu nome"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit" variant="primary" disabled={!name}>
          continuar
        </Button>
      </Styles.Form>
      <Styles.Footer>
        <img alt="app-splash" src="splash.svg" />
        <h2 className="inviters">Izaelle & Leonardo</h2>
      </Styles.Footer>
    </Styles.Container>
  );
}
