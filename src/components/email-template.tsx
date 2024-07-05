import * as React from "react";

interface EmailTemplateProps {
  name: string;
  authLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  authLink,
  name,
}) => (
  <html lang="pt-br">
    <body>
      <h3>Olá, {name}!</h3>
      <p>Seu link de acesso: {authLink} </p>
    </body>
  </html>
);
