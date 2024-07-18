import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

interface TextOptionsProps {
  onAddText: (textItem: { text: string; style: React.CSSProperties }) => void;
}

const TextOptions: React.FC<TextOptionsProps> = ({ onAddText }) => {
  const [text, setText] = useState('');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');

  const handleAddText = () => {
    onAddText({ text, style: { fontFamily, fontSize, color } });
    setText('');
  };

  return (
    <div className={styles.textOptions}>
      <div className={styles.option}>
        <label>Text: </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className={styles.option}>
        <label>Font: </label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div className={styles.option}>
        <label>Size: </label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>
      <div className={styles.option}>
        <label>Color: </label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <button className={styles.addButton} onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default TextOptions;
