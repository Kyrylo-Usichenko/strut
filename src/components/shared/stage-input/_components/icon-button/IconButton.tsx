import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import { IconButtonProps } from "./IconButton.types";

export default function IconButton({
    currentIcon,
    currentColor,
    showMenu,
    onIconChange,
    toggleMenu,
    menuRef
}: IconButtonProps) {
    return (
        <div style={{ position: "relative" }}>
            <ButtonIconOnly
                icon={currentIcon}
                tooltipLabel={!showMenu ? "Change Icon" : undefined}
                onClick={toggleMenu}
                color={currentColor}
            />
            {showMenu && <StageIconMenu activeColor={currentColor} onIconSelect={onIconChange} menuRef={menuRef} />}
        </div>
    );
}
