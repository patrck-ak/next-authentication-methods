"use server";

import { buttonVariants } from "@/components/ui/button";
import { Body, Head, Html, Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  url: any;
}

async function sendVerificationRequest(params: any) {
  const { renderToString } = await import("react-dom/server");

  const { identifier: to, provider, url } = params;
  const EmailHtml = renderToString(<EmailTemplate url={url} />);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${provider.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: provider.from,
      to,
      subject: `Na Régua - Acesso`,
      html: EmailHtml,
    }),
  });

  if (!res.ok)
    throw new Error("Resend error: " + JSON.stringify(await res.json()));
}

function EmailTemplate({ url }: Readonly<EmailTemplateProps>) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html lang="pt-br">
        <Head>
          <h3 className="text-zinc-800 font-sans font-medium">Na Regua App</h3>
        </Head>
        <Body>
          <div className="flex min-w-full flex-col gap-3 items-center justify-center bg-zinc-100">
            <p className="font-mono text-zinc-800">
              Aqui está seu link de acesso:
            </p>
            <a href={url}>
              <button className={buttonVariants({ variant: "outline" })}>
                Entrar
              </button>
            </a>
          </div>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default sendVerificationRequest;
