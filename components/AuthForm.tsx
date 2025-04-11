"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "@/components/FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(4),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully ! Please sign in.");
        router.push("/sign-in");
      } else {
        toast.success("Signed in successfully !");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Theare was an error : ${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className=" card-border lg:min-w-[556px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className=" flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3 className="text-primary-100">practice job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full form"
          >
            {!isSignIn && (
              <FormField
                name="name"
                control={form.control}
                label="Name"
                placeholder="your name"
              />
            )}

            <FormField
              name="email"
              control={form.control}
              label="email"
              placeholder="your email"
              type="email"
            />

            <FormField
              name="password"
              control={form.control}
              label="password"
              placeholder="password"
              type="password"
            />

            <Button type="submit" className="btn">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
            <p className="text-center">
              {isSignIn
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                href={isSignIn ? "/sign-up" : "/sign-in"}
                className="text-primary-200"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
