import AppleLogo from "@views/components/apple-logo";
import Field from "@views/components/field";
import GoogleLogo from "@views/components/google-logo";
import { Input } from "@views/components/ui/input";
import { Button } from "react-day-picker";
import { Link } from "react-router-dom";


const schemaCreateUserForm = z.object({
  email: z
    .string()
    .min(1, { message: 'email obrigátorio' })
    .email('Formato de email inválido'),
  password: z.string().trim().min(6, {
    message: 'A senha deve ter pelo menos 6 caractéres.',
  }),
});

export function Login() {
  const createUserForm = useForm({
    resolver: zodResolver(schemaCreateUserForm),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => console.log(data);

  const {
    handleSubmit,
    formState: { errors },
  } = createUserForm;

  return (
    <section className="m-4 mx-6 flex h-screen flex-col items-center justify-center">
      <h1 className="my-8 text-center text-2xl font-extrabold">
        Bem vindo ao
        <span className="text-primary">Ligth Life</span>
      </h1>

      <FormProvider {...createUserForm}>
        <form
          className="flex w-full flex-col items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field>
            <Input
              label="Email"
              name="email"
              placeholder="email@gmail.com"
              error={errors.email ? 'true' : ''}
            />
          </Field>

          <Field>
            <Input
              label="Senha"
              name="password"
              type="password"
              placeholder="••••••"
              error={errors.password ? 'true' : ''}
            />
          </Field>

          <span className="w-full">
            <Button asChild variant="link" className="p-2">
              <Link className="w-fit" href="/">
                Esqueceu a senha?
              </Link>
            </Button>
          </span>

          <Button type="submit" className="mt-8 w-56">
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className="font-display my-4 flex items-center">
        <span>Novo no Ligth Life?</span>
        <Button asChild variant="link" className="p-2">
          <Link href="/register"> Criar sua conta</Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Button
          variant="icon"
          className="rounded-xl border border-secondary hover:bg-secondary"
        >
          <GoogleLogo />
        </Button>

        <Button
          variant="icon"
          className="rounded-xl border border-secondary hover:bg-secondary"
        >
          <AppleLogo />
        </Button>
      </div>
    </section>
  );
}

