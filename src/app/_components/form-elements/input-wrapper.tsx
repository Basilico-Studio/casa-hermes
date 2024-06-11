import React from "react";
import { FieldErrors, FieldValues, get } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type InputWrapperProps = {
  label?: string;
  name: string;
  errors?: FieldErrors<FieldValues>;
  children: React.ReactNode;
  className?: string;
};
export const InputWrapper = ({ label, name, errors, children, className }: InputWrapperProps) => {
  const error = get(errors, name);

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      {label && <Label className="flex items-center gap-2 text-xs">{label}</Label>}
      {children}
      {error && <p className="text-xs text-destructive">{error.message as string}</p>}
    </div>
  );
};
