import React from "react";
import NavItem, { NavItemProps } from "../atoms/NavItem";

type Props = {
    navItems: NavItemProps[];
};

const Navlist = (props: Props) => {
    return (
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
            {props.navItems.map((item, index) => (
                <NavItem
                    key={item.href}
                    href={item.href}
                    className={item.className}
                >
                    {item.label}
                </NavItem>
            ))}
        </div>
    );
};

export default Navlist;
