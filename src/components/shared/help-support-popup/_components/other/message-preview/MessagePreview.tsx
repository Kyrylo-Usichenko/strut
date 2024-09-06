import styles from "./MessagePreview.module.css";
import { Message } from "../../../types.module";
import Image from "next/image";
import SmallArrowIcon from "~/components/icons/HelpSupportSmallArrowIcon";
import ImagePlaceholder from "../image-placeholder/ImagePlaceHolder";

type MessagePrevieProps = {
    message: Message;
    separator?: boolean;
    isNew?: boolean;
    clickHandler?: () => void;
};

export default function MessagePreview({ message, separator, isNew, clickHandler }: MessagePrevieProps) {
    return (
        <div
            className={separator ? styles.messageWithHover : styles.message}
            style={separator ? undefined : { padding: "8px 0px 0px 0px" }}
            onClick={clickHandler}
        >
            <div className={styles.messageImage}>
                {message.imagePath ? (
                    <Image
                        src={message.imagePath}
                        alt={message.name}
                        className={styles.image}
                        width={40}
                        height={40}
                        unoptimized={true}
                    />
                ) : (
                    <ImagePlaceholder letter={message.name[0]} />
                )}
            </div>
            <div className={styles.messageContent}>
                <div className={styles.messagePreviewContainer}>
                    <span
                        className={styles.messagePreview}
                        style={isNew && separator ? { fontWeight: "500" } : undefined}
                    >
                        {message.chat[message.chat.length - 1].text}
                    </span>
                </div>
                <div className={styles.messageInfoContainer}>
                    <span className={styles.messageName}>{`${message.name} • ${message.timeAgo} `}</span>
                </div>
            </div>
            <div className={styles.arrowIcon} style={separator ? undefined : { marginRight: "6px" }}>
                <SmallArrowIcon style={{ minWidth: "8px", height: "8px", width: "auto" }} />
            </div>
            {separator && <div className={styles.separator} />}
        </div>
    );
}
