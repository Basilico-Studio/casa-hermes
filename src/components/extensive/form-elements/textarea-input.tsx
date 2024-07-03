import React, { Ref } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { InputWrapper } from "./input-wrapper";
import { Textarea } from "@/components/ui/textarea";

export type TextAreaProps<T extends FieldValues> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  name: keyof T;
  infoLabel?: string;
  validation?: RegisterOptions<FieldValues>;
  ref?: Ref<HTMLTextAreaElement> | undefined;
};

export const TextAreaInput = <T extends FieldValues>({
  label,
  name,
  infoLabel,
  validation,
  ...rest
}: TextAreaProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper name={name} label={label} errors={errors}>
      <Textarea
        {...register(name, validation)}
        {...rest}
        rows={6}
        className="bg-white"
      />
    </InputWrapper>
  );
};
