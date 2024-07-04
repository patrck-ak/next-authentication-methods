import { signIn } from "../../auth";
import { buttonVariants } from "./ui/button";

export default function agicLink() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button
        className={buttonVariants({ variant: "secondary" })}
        type="submit"
      >
        Signin with Resend
      </button>
    </form>
  );
}
