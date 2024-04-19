import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import * as Locales from "date-fns/locale";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: number | string | Date, locale?: string) {
  return format(date, "dd/MM/yyyy", {
    // @ts-expect-error
    locale: locale ? Locales[locale] : Locales.it,
  });
}
