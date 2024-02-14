"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schemaCreateUserForm = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

function Login() {
  const form = useForm<z.infer<typeof schemaCreateUserForm>>({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof schemaCreateUserForm>) {
    console.log(data);
  }

  return (
    <section className="flex flex-col justify-center h-screen w-full">
      <h1 className="mb-5 text-3xl font-bold text-center ">Welcome!</h1>
      <p className="text-base font-medium text-primary text-center pb-14  ">
        Let’s help you meet up your task
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-8">
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
        </form>
      </Form>
      <Button type="submit">login</Button>
    </section>
  );
}

export default Login;
