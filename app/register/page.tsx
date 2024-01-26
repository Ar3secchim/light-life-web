"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import IlustrationElipse from "@/assets/SignIn/elipse-superior.svg";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const schemaCreateUserForm = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

function Register() {
  const form = useForm<z.infer<typeof schemaCreateUserForm>>({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof schemaCreateUserForm>) {
    console.log(data);
  }

  return (
    <main className="w-full">
      <div className="absolute -left-2">
        <Image src={IlustrationElipse} alt="elipse" />
      </div>

      <section className="flex flex-col justify-center h-screen">
        <h1 className="mb-5 text-3xl font-bold text-center ">
          Welcome Onboard!
        </h1>
        <p className="text-base font-medium text-primary text-center pb-14  ">
          Let’s help you meet up your task
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pb-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="senha" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="confirme sua senha" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button type="submit">Submit</Button>
      </section>
    </main>
  );
}

export default Register;
