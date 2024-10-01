import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { routes } from "@app/Router/routes";
import { AppleLogo } from "@views/components/apple-logo";
import { Field } from "@views/components/field";
import { GoogleLogo } from "@views/components/google-logo";
import { Button } from "@views/components/ui/button";
import { Input } from "@views/components/ui/input";
import console from "console";

const schemaLoginUserForm = z.object({
  email: z
    .string()
    .min(1, { message: 'email obrigátorio' })
    .email('Formato de email inválido'),
  password: z.string().trim().min(6, {
    message: 'A senha deve ter pelo menos 6 caractéres.',
  }),
});

export function Login() {
  const LoginUserForm = useForm({
    resolver: zodResolver(schemaLoginUserForm),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: any) => console.log(data);

  const {
    handleSubmit,
    formState: { errors },
  } = LoginUserForm;

  return (
    <section className="m-4 mx-6 flex h-screen flex-col items-center justify-center">
      <h1 className="my-8 text-center text-2xl font-extrabold ">
        Bem vindo ao
        <span className="text-primary"> Ligth Life</span>
      </h1>

      <FormProvider {...LoginUserForm}>
        <form
          className="flex w-full flex-col items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field>
            <Input
              label="Seu email"
              name="email"
              placeholder="email@gmail.com"
              error={errors.email ? true : false}
            />
          </Field>

          <Field>
            <Input
              label="Sua senha"
              name="password"
              type="password"
              placeholder="••••••"
              error={errors.password ? true : false}
            />
          </Field>

          <span className="w-full">
            <Button asChild variant="link" className="p-2">
              <Link className="w-fit" to="/">
                Esqueceu a senha?
              </Link>
            </Button>
          </span>

          <Button type="submit" className="mt-8 w-56">
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className="font-display text-sm flex my-2 items-center">
        <span>Novo no Ligth Life?</span>
        <Button asChild variant="link" className="p-2 dark:text-primary ">
          <Link to={routes.singup}> Criar sua conta</Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="rounded-xl py-6 border border-secondary hover:bg-secondary dark:hover:bg-primary dark:bg-[#12f7c50e]"
        >
          <GoogleLogo />
        </Button>

        <Button
          variant="outline"
          className="flex justify-center rounded-xl px-3 py-6 border border-secondary hover:bg-secondary dark:hover:bg-primary dark:bg-[#12f7c50e]"
        >
          <AppleLogo />
        </Button>
      </div>
    </section>
  );
}

