"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
    const { data: session } = useSession();

    useEffect(() => {
        console.log({ sessionLogin: session });
    }, [session]);

    return (
        <div>
            <button
                onClick={() =>
                    signIn("google", {
                        callbackUrl: "/profile",
                        redirect: true,
                    })
                }
            >
                Dang nhap voi google
            </button>
            <button>Dang nhap voi github</button>
        </div>
    );
};

export default Login;
