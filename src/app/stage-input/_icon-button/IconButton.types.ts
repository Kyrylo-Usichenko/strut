export type IconButtonProps = {
    currentIcon: JSX.Element;
    currentColor: string;
    showMenu: boolean;
    onIconChange: (icon: JSX.Element, color: string) => void;
    toggleMenu: () => void;
};