import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const headersList = headers();
  const lang = headersList.get("accept-language");

  if (lang?.includes("fr")) {
    redirect("/fr");
  }

  if (lang?.includes("ar")) {
    redirect("/ar");
  }

  // default
  redirect("/en");
}