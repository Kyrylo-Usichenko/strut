"use client";

import React, { useState, useEffect } from "react";

// TypeScript declaration for `require.context`
declare const require: {
    context: (
        path: string,
        deep?: boolean,
        filter?: RegExp
    ) => {
        keys: () => string[];
        (id: string): any;
    };
};

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface IconsMap {
    [key: string]: IconComponent;
}

export default function IconsPage() {
    const [iconsMap, setIconsMap] = useState<IconsMap>({});

    useEffect(() => {
        const loadIcons = () => {
            const context = require.context("../../components/icons", false, /\.tsx$/);
            const icons: IconsMap = {};

            context.keys().forEach((fileName) => {
                const iconName = fileName.replace("./", "").replace(".tsx", "");
                icons[iconName] = context(fileName).default as IconComponent;
            });

            setIconsMap(icons);
        };

        loadIcons();
    }, []);

    return (
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Icons</h1>
            {Object.keys(iconsMap).map((iconName) => {
                const IconComponent = iconsMap[iconName];
                return (
                    <div key={iconName} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        <IconComponent style={{ marginRight: "20px" }} />
                        <span>{iconName}</span>
                    </div>
                );
            })}
        </div>
    );
}
