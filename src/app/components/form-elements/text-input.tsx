import React, { Ref } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { InputWrapper } from "./input-wrapper";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type InputProps<T extends FieldValues> = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  name: keyof T;
  infoLabel?: string;
  validation?: RegisterOptions<FieldValues>;
  ref?: Ref<HTMLInputElement> | undefined;
  errorName?: string;
  wrapperClassName?: string;
};

export const TextInput = <T extends FieldValues>({ label, name, infoLabel, validation, className, wrapperClassName, ...rest }: InputProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper name={name} label={label} errors={errors} className={wrapperClassName}>
      <Input
        {...register(name, {
          ...validation,
          // @ts-expect-error
          valueAsNumber: rest.type === "number",
        })}
        step={rest.type === "time" ? "60" : ".01"}
        {...rest}
        className={cn("bg-background", className)}
      />
    </InputWrapper>
  );
};
