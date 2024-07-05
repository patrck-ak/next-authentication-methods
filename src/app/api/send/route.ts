import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

interface PostProps {
  email: string;
}

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export async function POST({ email }: PostProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: "naoresponda@na-regua.site",
      to: "patrickoliveira.silva20@gmail.com",
      subject: "Hello World",
      html: "<p>CHEGOU CARAIO</strong>!</p>",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
