import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Controller, useFormContext } from "react-hook-form";

type SwitchInputProps = {
  name: string;
  label?: string;
};

export const SwitchInput = (props: SwitchInputProps) => {
  const { control } = useFormContext();
  return (
    <div className="flex space-x-3 items-center">
      <Controller
        name={props.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Switch id={props.name} onCheckedChange={onChange} checked={value} />
        )}
      />
      <Label htmlFor={props.name}>{props.label}</Label>
    </div>
  );
};
