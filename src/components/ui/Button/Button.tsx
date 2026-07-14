import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive";

  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-md font-medium transition-all duration-200",

        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",

          "bg-slate-200 hover:bg-slate-300": variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700": variant === "destructive",

          "px-3 py-2 text-sm": size === "sm",

          "px-4 py-2": size === "md",

          "px-6 py-3": size === "lg",
        },

        className,
      )}
      {...props}
    />
  );
}
