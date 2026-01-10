import React from "react";
import { primaryColor, primaryColorDark } from "../../lib/site";

// I'll create a simple utility if it doesn't exist, or just inline it.
// Since I haven't seen a utils file, I will assume I need to handle classes manually or create one.
// Let's create a simple Button for now.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Size styles
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Variant styles
    // Note: Tailwind arbitrary values with dynamic JS variables can be tricky if not configured,
    // but since they were working before with template literals in className, we'll try to stick to that pattern or use style prop for dynamic colors.

    // Using style prop for dynamic colors from site.ts to avoid "bg-[var]" issues if tailwind isn't scanning site.ts
    const dynamicStyle: React.CSSProperties = {};
    let variantClasses = "";

    if (variant === "primary") {
      // We'll use the style prop for the specific colors since they are JS variables
      dynamicStyle.backgroundColor = primaryColor;
      dynamicStyle.color = "white";
      // We need hover effect. Since we can't easily do hover in inline styles without state,
      // it's better if we can use the arbitrary value syntax if we trust it works, OR standard classes.
      // The user's code used: `bg-[${primaryColor}] hover:bg-[${primaryColorDark}]`
      // This implies the tailwind config is set up to allow JIT arbitrary values or the file content is scanned.
      // However, passing variables into class strings like `bg-[${col}]` only works if the FULL STRING stands in the file for the scanner to see.
      // If I construct it here in a library component, it might break if I don't import the constants in the consuming file?
      // No, strictly speaking, Tailwind scans source files. If `site.ts` is scanned or if this file `Button.tsx` imports them, it should be fine.
      variantClasses = `bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white shadow-lg hover:shadow-xl`;
    } else if (variant === "outline") {
      variantClasses = `border-2 border-[${primaryColor}] text-[${primaryColor}] hover:bg-gray-50`;
    } else if (variant === "ghost") {
      variantClasses = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
