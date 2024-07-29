import ButtonIconOnly from '~/components/shared/buttonIconOnly/ButtonIconOnly';
import StageIconMenu from '~/components/shared/stage-icon-menu/StageIconMenu';
import styles from './IconButton.module.css';
import { IconButtonProps } from './IconButton.types';

export default function IconButton({ currentIcon, currentColor, showMenu, onIconChange, toggleMenu }: IconButtonProps) {
    return (
        <div style={{ position: 'relative' }}>
            <ButtonIconOnly
                icon={currentIcon}
                tooltipLabel={!showMenu ? "Change Icon" : undefined}
                onClick={toggleMenu}
                disabled={showMenu}
                color={currentColor}
            />
            {showMenu && (
                <>
                    <div className={styles.overlay} onClick={toggleMenu}></div>
                    <StageIconMenu activeColor={currentColor} onIconSelect={onIconChange} />
                </>
            )}
        </div>
    );
}