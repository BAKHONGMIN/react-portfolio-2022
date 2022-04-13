import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import '../App.scss';
import '../fonts/font.css';

const ReactTypingEffectDemo = () => {

    return (
     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Notosans-m',
          color: '#4285f4',
          fontSize: '14px',
          fontWeight:'700',
        }}
        startDelay={0}
        cursorColor="#4285f4"
        multiText={[
          'BAK HONG MIN',
          '박 홍 민',
        ]}
        multiTextDelay={1000}
        typeSpeed={200}
        />
    );
  }
    
  export default ReactTypingEffectDemo;