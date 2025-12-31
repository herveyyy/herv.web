import React from "react";

export type NavItemProps = {
    href: string;
    children?: React.ReactNode;
    className?: string;
    label?: string;
    onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
    href,
    children,
    className = "",
    label,
    onClick,
}) => {
    return (
        <a
            href={href}
            className={`hover:text-emerald-600 transition-colors ${className}`}
            onClick={onClick}
        >
            {label || children}
        </a>
    );
};

export default NavItem;
