import React, { useState } from 'react';
import Draggable from 'react-draggable';

interface DraggableTextProps {
  text: string;
  style: React.CSSProperties;
  onChangeText: (newText: string) => void;
}

const DraggableText: React.FC<DraggableTextProps> = ({ text, style, onChangeText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChangeText(currentText);
  };

  return (
    <Draggable>
      <div
        style={{ ...style, position: 'absolute', cursor: 'move' }}
        onDoubleClick={handleDoubleClick}
      >
        {isEditing ? (
          <input
            type="text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          currentText
        )}
      </div>
    </Draggable>
  );
};

export default DraggableText;
