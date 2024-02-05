"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { createGuest } from "@/services/supabase-api/guest";
import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/provider/GlobalContextProvider";
import { CONFIG } from "@/static/config";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const { setCurrentUser, currentUser, isLoading, setIsLoading } =
    useGlobalContext();

  const currentUserSlug = currentUser?.slug;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const user = await createGuest({ name: name });

    setIsLoading(false);

    if (user) {
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    if (currentUserSlug) {
      router.push("/list");
    }
  }, [currentUserSlug]);

  return (
    <Styles.Container>
      <Styles.Title>{CONFIG.appTitle}</Styles.Title>
      <Styles.Subtitle>Sugestão de presentes</Styles.Subtitle>
      <Styles.Form onSubmit={handleSubmit}>
        <Input
          placeholder="nome completo"
          label="Digite seu nome"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!name || name.length < 4 || isLoading}
        >
          continuar
        </Button>
      </Styles.Form>
      <Styles.Footer>
        <Image
          width={366}
          height={345}
          layout="responsive"
          alt="app-splash"
          src="splash.svg"
        />
        <img className="inviters" src="authors.svg" alt="Izaelle & Leonardo" />
      </Styles.Footer>
    </Styles.Container>
  );
}
