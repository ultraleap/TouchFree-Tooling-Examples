import React from "react";
import "./style.css";

interface InteractionButtonProps {
  progressToClick: number;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const InteractionButton: React.FC<InteractionButtonProps> = ({
  progressToClick,
  setBackgroundColor,
  color,
}) => {
  const [hovered, setHovered] = React.useState<Boolean>(false);

  const progress = hovered ? progressToClick : 0;

  // Set the wave background image's position based on how close the user is to pressing the button
  // If we are no longer moving towards the click then transition back to the start position
  const wavePosition = (): React.CSSProperties => {
    if (progress > 0) {
      return {
        backgroundPosition: `${progress * 500}% ${progress * 240 - 210}%`,
      };
    }
    return {
      transition: "0.5s ease-out",
    };
  };

  return (
    <div className="buttonDiv">
      <button
        style={{
          ...wavePosition(),
          backgroundColor: color,
        }}
        className={`button 
          ${hovered ? " buttonHover" : ""} 
          ${progress >= 1 ? " buttonActive" : ""}`}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerUp={() => setBackgroundColor(color)}
      />
    </div>
  );
};

export default InteractionButton;
