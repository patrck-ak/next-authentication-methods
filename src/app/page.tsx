import MagicLink from "@/components/methods/magic";
import GitHub from "@/components/methods/github";

export default function Home() {
  return (
    <main className="p-14">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h3>Entrar com:</h3>
        <MagicLink />
        <GitHub />
      </div>
    </main>
  );
}
