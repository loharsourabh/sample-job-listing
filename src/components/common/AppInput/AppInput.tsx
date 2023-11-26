import { forwardRef } from "react";

const AppInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="w-full rounded-[5px] border border-[#E6E6E6] px-3 py-2"
    />
  );
});

export default AppInput;
