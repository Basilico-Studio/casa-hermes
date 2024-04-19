import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

export type FormProps<T extends FieldValues> = UseFormReturn<T> & {
  onSubmit?: (data: T) => void;
  className?: string;
};

const Form = <T extends FieldValues>({
  children,
  onSubmit,
  className,
  ...form
}: PropsWithChildren<FormProps<T>>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit ? onSubmit : () => {})}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
