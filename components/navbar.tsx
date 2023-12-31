import { redirect } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";

const NavBar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex justify-between h-16 items-center px-4">
        <div>
          <StoreSwitcher items={stores}/>
        </div>
        <MainNav className="mx-6" />
        <div className="ml-auto hidden lg:flex items-center space-x-4"> 
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
