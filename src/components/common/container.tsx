import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  as?: React.ElementType;
};

export const Container = ({ className, as, ...props }: ContainerProps) => {
  const Component = as || "div";
  return (
    <Component className={cn("max-w-7xl w-full mx-auto px-4", className)}>
      {props.children}
    </Component>
  );
};
