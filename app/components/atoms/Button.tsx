import React from "react";

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
    className?: string;
};

const Button: React.FC<CTAButtonProps> = ({
    label = "Inquire for Project",
    className = "",
    children,
    ...props
}) => {
    return (
        <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
            <button
                {...props}
                className={`px-10 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                    className || ""
                }`}
            >
                {children || label}
            </button>
        </div>
    );
};

export default Button;
