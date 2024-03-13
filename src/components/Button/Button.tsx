import React from 'react';
import '../../app/globals.css';

export interface SvgSize {
  width: number;
  height: number;
}

export interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: 'primary' | 'secondary';
  height?: number;
  width?: number;
}

const PrimaryButtonSVG = (props: SvgSize) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill="none"
    >
      <path fill="#161616" d="M0 6h2v2H0zM0 8h2v2H0zM2 4h2v2H2z"/>
      <path fill="#4887FF" d="M2 6h2v2H2z"/>
      <path fill="#175BDB" d="M2 8h2v2H2z"/>
      <path fill="#161616" d="M4 2h2v2H4z"/>
      <path fill="#4887FF" d="M4 4h2v2H4z"/>
      <path fill="#175BDB" d="M4 6h2v2H4zM4 8h2v2H4z"/>
      <path fill="#161616" d="M6 0h2v2H6z"/>
      <path fill="#4887FF" d="M6 2h2v2H6zM6 4h2v2H6z"/>
      <path fill="#175BDB" d="M6 6h2v2H6zM6 8h2v2H6z"/>
      <path fill="#161616" d="M8 0h2v2H8z"/>
      <path fill="#4887FF" d="M8 2h2v2H8zM8 4h2v2H8z"/>
      <path fill="#175BDB" d="M8 6h2v2H8zM8 8h2v2H8z"/>
      <path fill="#161616" d="M0 10h2v20H0z"/>
      <path fill="#175BDB" d="M2 10h8v20H2z"/>
      <path fill="#161616" d="M6 40v-2h2v2zM8 40v-2h2v2zM4 38v-2h2v2z"/>
      <path fill="#002E84" d="M6 38v-2h2v2zM8 38v-2h2v2z"/>
      <path fill="#161616" d="M2 36v-2h2v2z"/>
      <path fill="#002E84" d="M4 36v-2h2v2zM6 36v-2h2v2zM8 36v-2h2v2z"/>
      <path fill="#161616" d="M0 34v-2h2v2z"/>
      <path fill="#002E84" d="M2 34v-2h2v2z"/>
      <path fill="#175BDB" d="M4 34v-2h2v2zM6 34v-2h2v2zM8 34v-2h2v2z"/>
      <path fill="#161616" d="M0 32v-2h2v2z"/>
      <path
          fill="#175BDB"
          d="M2 32v-2h2v2zM4 32v-2h2v2zM6 32v-2h2v2zM8 32v-2h2v2z"
      />
      <path fill="#161616" d="M10 0h114v2H10z"/>
      <path fill="#4887FF" d="M10 2h114v2H10z"/>
      <path fill="#175BDB" d="M10 4h114v32H10z"/>
      <path fill="#002E84" d="M10 36h114v2H10z"/>
      <path fill="#161616" d="M10 38h114v2H10zM132 6h-2v2h2zM130 4h-2v2h2z"/>
      <path fill="#4887FF" d="M130 6h-2v2h2z"/>
      <path fill="#161616" d="M128 2h-2v2h2z"/>
      <path fill="#4887FF" d="M128 4h-2v2h2z"/>
      <path fill="#175BDB" d="M128 6h-2v2h2z"/>
      <path fill="#161616" d="M126 0h-2v2h2z"/>
      <path fill="#4887FF" d="M126 2h-2v2h2zM126 4h-2v2h2z"/>
      <path fill="#175BDB" d="M126 6h-2v2h2zM124 8h6v24h-6z"/>
      <path fill="#161616" d="M130 8h2v24h-2zM126 40v-2h-2v2zM128 38v-2h-2v2z"/>
      <path fill="#002E84" d="M126 38v-2h-2v2z"/>
      <path fill="#161616" d="M130 36v-2h-2v2z"/>
      <path fill="#002E84" d="M128 36v-2h-2v2zM126 36v-2h-2v2z"/>
      <path fill="#161616" d="M132 34v-2h-2v2z"/>
      <path fill="#002E84" d="M130 34v-2h-2v2zM128 34v-2h-2v2z"/>
      <path fill="#175BDB" d="M126 34v-2h-2v2z"/>
    </svg>
)


export const Button = (props: ButtonProps) => {
  const {onClick, text, type = 'primary', height = 40, width = 132} = props;
  return (
      <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          style={{fontFamily: '"Press Start 2P", cursive'}} // Inline style for custom font
      >
        {/*{type === 'primary' && <PrimaryButtonSVG width={width} height={height}/>}*/}
        <span>{text}</span>
      </button>
  );
};
