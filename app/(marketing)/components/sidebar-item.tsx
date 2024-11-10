"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

interface SidebarItemProps {
  label: string;
  href: string;
}

export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <SheetClose asChild>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "w-full flex items-center gap-x-2 text-gray-600 text-sm font-medium px-6 py-3 hover:bg-gray-50 transition-colors",
          isActive && "text-blue-600 bg-blue-50 hover:bg-blue-50"
        )}
      >
        {label}
      </button>
    </SheetClose>
  );
};