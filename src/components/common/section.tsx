import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  as?: React.ElementType;
};

export const Section = ({
  className,
  as,
  children,
  ...props
}: SectionProps) => {
  const Component = as || "section";
  return (
    <Component {...props} className={cn("py-20", className)}>
      {children}
    </Component>
  );
};
