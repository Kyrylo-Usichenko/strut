"use client";
import React from "react";
import { MenuItem, PopupMenu } from "../PopupMenu/PopupMenu";

interface StageMenuProps {
    items: MenuItem[];
    visible: boolean;
    direction?: "top" | "bottom" | "left" | "right";
}

const StageMenu: React.FC<StageMenuProps> = ({ visible, direction, items }) => {
    return <PopupMenu items={items} direction={direction} visible={visible} />;
};

export { StageMenu };
