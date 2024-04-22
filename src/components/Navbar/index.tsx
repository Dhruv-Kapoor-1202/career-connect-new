import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";

interface RouteProps {
  to: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/course",
    label: "Course",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

import Logo from "../../assets/CareerConnect.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex mr-auto">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex justify-center items-center gap-1"
            >
              <img src={Logo} className="size-14 dark:hidden" />
              <span className="hidden dark:block  sm:block">CareerConnect</span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl flex justify-start items-center">
                    <img src={Logo} className="size-14 hidden" />
                    CareerConnect
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ to, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    to="/enroll"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Enroll Now
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.to}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />

            <Link
              to="/enroll"
              className={`border ${buttonVariants({ variant: "default" })}`}
            >
              Enroll Now
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
