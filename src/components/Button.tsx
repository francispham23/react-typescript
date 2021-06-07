import React from 'react'

type Props = {
  // onClick(): string;                 // Method returns String
  onMouseUp(): void;                    // Method returns Nothing
  onMouseDown(text: string):  void;     // Method with Params
  onMouseOut: () => void;               // Function return Nothing
  onMouseOver: (text: string) => void;  // Function with Params

  /* React Events: */
  // 1. Basic Mouse Event
  onDblClick?: (e: React.MouseEvent) => void; 
  // 2. Mouse Event with More Specificities
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ 
  onClick, onMouseOver, onMouseDown, onMouseUp, onMouseOut 
}: Props) => {
  return <button 
          onMouseUp={() => onMouseUp()}
          onMouseDown={() => onMouseDown('Mouse Down')}
          onMouseOut={() => onMouseOut()}
          onMouseOver={() => onMouseOver('Mouse Over')}
          onClick={onClick}
        >Submit</button>;
};
