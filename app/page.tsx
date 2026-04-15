import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const headersList = headers();
  const langHeader = headersList.get("accept-language") || "";

  const lang = langHeader.split(",")[0]; // get first language

  if (lang.startsWith("fr")) {
    redirect("/fr");
  }

  if (lang.startsWith("ar")) {
    redirect("/ar");
  }

  redirect("/en");
}