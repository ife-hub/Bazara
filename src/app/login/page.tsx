"use client";

// export default function LoginPage(){
//     return <h1>Login Page</h1>;
// }



import { useRouter } from "next/navigation";
import useAuthStore from "@/lib/store";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/lib/auth-client";
import '../../styles/global.css';
import Image from "next/image";

export default function LoginPage(){
    const router = useRouter();
    const setToken = useAuthStore((s) =>s.setToken);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        mode: "onBlur", // validates onBlur
    });

    async function onSubmit(data: LoginSchemaType) {
        try {
                const res = await login(data.email, data.password);
                // set client state
                setToken(res.token);
                // redirect to dashboard
                router.push("/dashboard");
        } catch (err: unknown) {
  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Logout failed");
  }
}
    }

    

    return (

        <main className="mainClass min-h-screen flex items-center justify-center p-6">
            
            <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="formClass w-full max-w-md bg-white p-6 rounded-md shadow"
                >

                <div className="logoDiv">
                    <Image 
                        src="/images/logo.png"
                        alt="Logo"
                        className="logo"
                        width={25}
                        height={12.5}
                    />
                    <h4 className="bazaraText">Bazara</h4>
                </div>

                <h1 className="loginH1 text-2xl font-semibold mb-4">Login to your account</h1>
                
                <Input
                    label="Email Address/Username"
                    type="email"
                    {...register("email")}
                />

                <Input
                    label="Password"
                    type="password"
                    {...register("password")}
                />

                <h3 className="forgotPassword">Forgot Password?</h3>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="loginBtn mt-4 w-full py-2 rounded bg-blue-600 text-white disabled:opacity-50"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>

        </main>
    );
}