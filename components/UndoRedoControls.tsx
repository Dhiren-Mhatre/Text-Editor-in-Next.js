import React from 'react';
import styles from '../styles/Home.module.css';

interface UndoRedoControlsProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const UndoRedoControls: React.FC<UndoRedoControlsProps> = ({ onUndo, onRedo, canUndo, canRedo }) => {
  return (
    <div className={styles.undoRedoControls}>
      <button onClick={onUndo} disabled={!canUndo} className={styles.controlButton}>
        Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo} className={styles.controlButton}>
        Redo
      </button>
    </div>
  );
};

export default UndoRedoControls;
