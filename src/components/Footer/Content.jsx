'use client';
import React from 'react'
import Link from 'next/link';
import styles from './page.module.css'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { disperse, transforms } from './anim';
import gsap from 'gsap';

export default function Content() {
    const background = useRef(null);
    const setBackground = (isActive) => {
        gsap.to(background.current, {opacity: isActive ? 0.8 : 0})
      }

  return (
     <main className={styles.main}>
      <div className={styles.body}>

        <div className={styles.introLine}>
          <p>Vincent</p>
          <p>Renaud</p>
        </div>

        <div className={styles.introLine}>
          <p>Design UX / UI</p>
          <p>&</p>
        </div>

        <div className={styles.introLine}>
          <p>Développement</p>
          <p>Web</p>
        </div>
        <a href='https://www.linkedin.com/in/vincent-renaud1/'
        target="_blank" 
        rel="noopener noreferrer">
          <TextDipserse setBackground={setBackground}>
            →Linkedin
          </TextDipserse>
        </a>
        
        <div className='flex justify-between'>
            <a href="mailto:vincentrenaud.audd@gmail.com"
               target="_blank" 
               rel="noopener noreferrer">
              <TextDipserse setBackground={setBackground}>
                <p>→Email</p>
              </TextDipserse>
            </a>

            <a href="/CV_Vincent_Renaud.pdf"
               target="_blank" 
               rel="noopener noreferrer">
              <TextDipserse setBackground={setBackground}>
                <p>→CV</p>
              </TextDipserse>
            </a>
        </div>
      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}

function TextDipserse(props) {
  
    const { children, setBackground } = props;
  
    const [isAnimated, setIsAnimated] = useState(false);
  
    const getChars = (element) => {
      let chars = [];
      if (Array.isArray(children)) {
        children.forEach((el, i) => {
          chars.push(splitWord(el.props.children, i));
        });
      } else {
        const randomStartIndex = Math.floor(Math.random() * 5);
        chars.push(splitWord(children, randomStartIndex));
      }
      return chars;
    }
  
    const splitWord = (word, indexOfWord) => {
      const textContent = typeof word === 'object' && word.props ? word.props.children : word;
      let chars = [];
      textContent.split("").forEach((char, i) => {
        const transformIndex = (i + indexOfWord) % transforms.length;
        chars.push(
          <motion.span 
            custom={transformIndex} 
            variants={disperse} 
            animate={isAnimated ? "open" : "closed"} 
            key={char + i}
          >
            {char}
          </motion.span>
        );
      });
      return chars;
    }
  
    const manageMouseEnter = () => {
      setBackground(true)
      setIsAnimated(true);
    }
    const manageMouseLeave = () => {
      setBackground(false)
      setIsAnimated(false);
    }
  
    return (
      <div style={{cursor: "pointer"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave(false)}} className={styles.introLine}>
      { getChars(children) }
      </div>
    )
  }