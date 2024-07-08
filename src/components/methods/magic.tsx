import { MagicWandIcon } from "@radix-ui/react-icons";
import { signIn } from "../../../auth";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

export default function magicLink() {
  return (
    <form
      className="p-10 flex flex-col items-start justify-start gap-3 border-gray-100 rounded-md border-solid border-2"
      action={async (formData) => {
        "use server";

        try {
          await signIn("resend", formData);
        } catch (error) {
          if (error) {
            console.log("deu erro: " + JSON.stringify(error));
          }
        }
      }}
    >
      <h6 className="text-zinc-400">Magic Link</h6>
      <Input
        placeholder="E-Mail"
        autoComplete="email"
        name="email"
        type="email"
        required
      />
      <button
        className={
          "gap-3 flex flex-row" + buttonVariants({ variant: "outline" })
        }
        type="submit"
      >
        <MagicWandIcon scale={1} /> Magic Link
      </button>
    </form>
  );
}
