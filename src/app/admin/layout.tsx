import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default layout;
