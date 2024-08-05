import React from "react";
import { BoldWrapper, ItalicWrapper, StrikethroughWrapper, MarkWrapper } from "../util-wrappers/Wrappers";

type TextPart = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    highlighted?: boolean;
};

const TaskItemText = ({ textParts }: { textParts: TextPart[] }) => {
    return (
        <span>
            {textParts.map((part, index) => {
                let element = <span key={index}>{part.text}</span>;

                if (part.bold) {
                    element = <BoldWrapper condition={part.bold}>{element}</BoldWrapper>;
                }
                if (part.italic) {
                    element = <ItalicWrapper condition={part.italic}>{element}</ItalicWrapper>;
                }
                if (part.strikethrough) {
                    element = <StrikethroughWrapper condition={part.strikethrough}>{element}</StrikethroughWrapper>;
                }
                if (part.highlighted) {
                    element = <MarkWrapper condition={part.highlighted}>{element}</MarkWrapper>;
                }

                return element;
            })}
        </span>
    );
};

export default TaskItemText;
