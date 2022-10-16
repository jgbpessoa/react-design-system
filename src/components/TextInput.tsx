import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputTagProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputTag(props: TextInputTagProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none",
        {}
      )}
      {...props}
    />
  );
}

TextInputTag.displayName = "TextInput.Tag";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputTag,
  Icon: TextInputIcon,
};
