import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Controller, useFormContext } from "react-hook-form";
import { InputWrapper } from "./input-wrapper";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import useClientTranslations from "@/lib/hooks/use-client-translations";

type DateInputProps<T> = {
  label: string;
  name: keyof T;
};

export const DateInput = <T extends Record<string, unknown>>({ name, label }: DateInputProps<T>) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { t } = useClientTranslations();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper name={name as string} label={label} errors={errors}>
      <Controller
        control={control}
        name={name as string}
        render={({ field: { onChange, value } }) => {
          return (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("justify-start text-left font-normal", !value && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {value ? formatDate(value) : <span>{t("calendarText")}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={new Date(value)}
                  onDayClick={(date: any) => {
                    onChange(date?.getTime());
                    setOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          );
        }}
      />
    </InputWrapper>
  );
};
