"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navItems } from "@/lib/nav-items";
import Link from "next/link";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { useRouter } from "next/navigation";

export function MobileNavbar() {
  const router = useRouter();
  const { t } = useClientTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"} className="space-y-12" hideCloseButton>
        <SheetHeader className="text-left">
          <SheetTitle
            className={cn(secondaryFont.className, "text-3xl font-bold")}
          >
            Casa Hermes
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.tLabel}
              className="text-left"
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  router.push(item.href);
                }, 300);
              }}
            >
              <p className="font-light">{t(item.tLabel)}</p>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
