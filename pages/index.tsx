import React, { useState } from 'react';
import DraggableText from '../components/DraggableText';
import TextOptions from '../components/TextOptions';
import UndoRedoControls from '../components/UndoRedoControls';
import styles from '../styles/Home.module.css';

interface TextItem {
  id: string;
  text: string;
  style: React.CSSProperties;
}

const Home: React.FC = () => {
  const [texts, setTexts] = useState<TextItem[]>([]);
  const [history, setHistory] = useState<TextItem[][]>([]);
  const [redoStack, setRedoStack] = useState<TextItem[][]>([]);

  const addText = (newText: { text: string; style: React.CSSProperties }) => {
    const newState = [...texts, { ...newText, id: Date.now().toString() }];
    setTexts(newState);
    setHistory([...history, texts]);
    setRedoStack([]);
  };

  const updateText = (id: string, newText: string) => {
    const newState = texts.map((textItem) =>
      textItem.id === id ? { ...textItem, text: newText } : textItem
    );
    setTexts(newState);
    setHistory([...history, texts]);
    setRedoStack([]);
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setRedoStack([texts, ...redoStack]);
      setTexts(previousState);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setHistory([...history, texts]);
      setTexts(nextState);
      setRedoStack(redoStack.slice(1));
    }
  };

  return (
    <div className={styles.container}>
      <UndoRedoControls onUndo={undo} onRedo={redo} canUndo={history.length > 0} canRedo={redoStack.length > 0} />
      <div className={styles.mainArea}>
        <div className={styles.canvas}>
          {texts.map((textItem) => (
            <DraggableText
              key={textItem.id}
              text={textItem.text}
              style={textItem.style}
              onChangeText={(newText) => updateText(textItem.id, newText)}
            />
          ))}
        </div>
        <TextOptions onAddText={addText} />
      </div>
      <p className={styles.instructions}>Double click on the text in the draggable region to edit.</p>
    </div>
  );
};

export default Home;
