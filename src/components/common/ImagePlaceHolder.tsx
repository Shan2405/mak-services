import React from "react";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
    width?: number | string;
    height?: number | string;
    aspectRatio?: "square" | "video" | "wide" | "portrait" | "auto";
    text?: string;
    className?: string;
    iconSize?: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    width,
    height,
    aspectRatio = "auto",
    text = "Image",
    className = "",
    iconSize = 48,
}) => {
    const aspectClasses = {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]",
        portrait: "aspect-[3/4]",
        auto: "",
    };

    const style: React.CSSProperties = {
        width: width,
        height: aspectRatio === "auto" ? height : undefined,
    };

    return (
        <div
            className={`
        bg-linear-to-br from-bg-muted to-bg-light
        flex flex-col items-center justify-center
        rounded-lg overflow-hidden
        ${aspectClasses[aspectRatio]}
        ${className}
      `}
            style={style}
        >
            <ImageIcon
                className="text-text-light mb-2"
                style={{ width: iconSize, height: iconSize }}
            />
            {text && (
                <span className="text-sm text-text-muted font-medium">{text}</span>
            )}
        </div>
    );
};

export default ImagePlaceholder;