import Image from "next/image";
import Ilustration from "@/assets/SignIn/ilustratorPageInto.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center h-screen">
      <Image
        src={Ilustration}
        alt="jovem sentado no sofá com um gato ao lado dele"
      />

      <div className="pb-14 pt-6">
        <h1 className="font-bold text-xl text-center pb-4">
          Faça as coisas com ToDo
        </h1>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore!
          Animi nemo aut atque, deleniti nihil dolorem repellendus.
        </p>
      </div>
      <Button asChild>
        <Link href="/login">Vamos começar</Link>
      </Button>
    </section>
  );
}
