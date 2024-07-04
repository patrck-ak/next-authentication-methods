import MagicLink from "@/components/magic";

export default function Home() {
  return (
    <main className="pt-10 gap-3 flex flex-row justify-center items-center bg-zinc-600 p-10 border-emerald-500 border-solid border-2 ">
      <h3>Entrar com:</h3>
      <MagicLink />
    </main>
  );
}
