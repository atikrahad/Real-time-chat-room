import Image from "next/image";
import { Inter } from "next/font/google";
import { useChatcontext } from "@/contexts/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user } = useChatcontext();
  const router = useRouter()

  const subMittestUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = Math.ceil(Math.random() * 1000);
    const user = {
      id,
      name,
    };
    localStorage.setItem("userInfo", JSON.stringify(user));
    router.push("/chat")

  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-xl font-semibold md:text-3xl">
          User story Real time chat room section
        </h1>

        <div className="py-10">
          {user ? (
            <div>
              <Link
                className="p-2 bg-red-300 rounded-md font-bold text-2xl"
                href={"/chat"}
              >
                Start chating
              </Link>
            </div>
          ) : (
            <div>
              <form onSubmit={subMittestUser}>
                <input className="p-2 outline-none" type="text" name="name" placeholder="Username" />
                <input className="p-2 outline-none bg-slate-400" type="submit" value={"Register"} />
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
