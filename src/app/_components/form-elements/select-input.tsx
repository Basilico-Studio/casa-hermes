import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { InputWrapper } from "./input-wrapper";

type FormSelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  onValueChange?: (val: string) => any;
} & DefaultSelect;

type DefaultSelect = {
  options: SelectOption[];
  defaultValue?: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export const SelectInput = (props: FormSelectProps) => {
  const { label, name, disabled, defaultValue } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper name={name} label={label} errors={errors}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              disabled={disabled}
              onValueChange={(val) => {
                props.onValueChange && props.onValueChange(val);
                onChange(val);
              }}
              value={value ?? defaultValue}
            >
              <SelectTrigger className="bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {props.options.map((option) => (
                  <SelectItem key={option.label} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }}
      />
    </InputWrapper>
  );
};
