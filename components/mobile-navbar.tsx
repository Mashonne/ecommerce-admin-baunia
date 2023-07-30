"use client";

import { LuAlignRight, LuUser } from "react-icons/lu";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";


import { cn } from "@/lib/utils";
import IconButton from "@/components/ui/icon-button";


const MobileNavbar = () => {

    const [open, setOpen] = useState(false);
  
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
          href: `/${params.storeId}`,
          label: "Overview",
          acitve: pathname === `/${params.storeId}`,
        },
        {
          href: `/${params.storeId}/billboards`,
          label: "Billboards",
          acitve: pathname === `/${params.storeId}/billboards`,
        },
        {
          href: `/${params.storeId}/categories`,
          label: "Categories",
          acitve: pathname === `/${params.storeId}/categories`,
        },
        {
          href: `/${params.storeId}/sizes`,
          label: "Sizes",
          acitve: pathname === `/${params.storeId}/sizes`,
        },
        {
          href: `/${params.storeId}/colors`,
          label: "Colors",
          acitve: pathname === `/${params.storeId}/colors`,
        },
        {
          href: `/${params.storeId}/products`,
          label: "Products",
          acitve: pathname === `/${params.storeId}/products`,
        },
        {
          href: `/${params.storeId}/orders`,
          label: "Orders",
          acitve: pathname === `/${params.storeId}/orders`,
        },
        {
          href: `/${params.storeId}/settings`,
          label: "Settings",
          acitve: pathname === `/${params.storeId}/settings`,
        },
      ];

  return (
    <>
      <button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-black"
      >
        {}
        <LuAlignRight size={24} />
      </button>
      <Transition show={open} appear as={Fragment}>
        <Dialog
          open={open}
          as="div"
          className="relative z-40 lg:hidden ease-in-out duration-300"
          onClose={onClose}
        >
          {/* Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={onClose}
          />

          {/* Dialog position */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out-quint duration-700"
              enterFrom="opacity-0 w-0"
              enterTo="opacity-100 w-full"
              leave="transition-all ease-in-out-quint duration-700"
              leaveFrom="opacity-100 w-full"
              leaveTo="opacity-0 w-0"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs gap-1 flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                {/* Close Button */}
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>

                {/* Render the Routes */}
                <div className="flex flex-col justify-between h-full">
                  <div className="pt-2 flex flex-col justify-end">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "px-5 py-4 border-b-[1px] bg-white text-black hover:bg-neutral-300 transition-colors",
                          route.acitve ? "bg-black text-white" : ""
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                  <div>
                      <div                 
                      className="
                      mx-3 
                      flex
                      px-2
                      items-center
                      justify-between
                      gap-3                    
                      cursor-pointer
                      "
                      >
                        <div className="bg-black rounded-full hover:bg-neutral-400 px-4 py-1 text-white">
                          <SignOutButton/>
                       </div>
                          <UserButton />
                      </div>          
                </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNavbar;
