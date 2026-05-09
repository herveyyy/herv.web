import React from "react";

interface SystemNodeProps {
    step: string;
    title: string;
    icon: string;
    onClick: () => void;
}

const SystemNode: React.FC<SystemNodeProps> = ({
    step,
    title,
    icon,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="system-node p-6 bg-stone-800 rounded-xl border border-stone-700 cursor-pointer hover:border-emerald-500 group"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-xs mb-1">
                        {step}
                    </h4>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <span className="text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                    {icon}
                </span>
            </div>
        </div>
    );
};

export default SystemNode;
