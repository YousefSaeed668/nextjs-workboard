import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import AdminNavbar from "./AdminNavbar";
export const metadata: Metadata = {
  title: "Admin",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <AdminNavbar />
      {children}
    </ClerkProvider>
  );
};

export default layout;
