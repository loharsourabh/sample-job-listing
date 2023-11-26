import { forwardRef } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "light";
}

const AppButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={
          variant === "light"
            ? "rounded-md border border-[#1597E4] bg-transparent px-4 py-2 text-[#1597E4]"
            : "rounded-md border border-transparent bg-[#1597E4] px-4 py-2 text-white"
        }
      >
        {children}
      </button>
    );
  },
);

export default AppButton;
