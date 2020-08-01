import React from 'react';
import { ColorConsumer } from '../contexts/Color';

const colors = [
  '#800020',
  'orange',
  '#effd5f',
  '#00ff7f',
  '#3344aa',
  '#4b0082',
  '#7f00ff',
];
const SelectColors = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Choose the color</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  margin: '0 .3rem',
                  cursor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
