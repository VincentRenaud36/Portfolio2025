'use client';
import React from 'react'
import styles from './style.module.css';
import Link from 'next/link';

export default function Project({ index, title, categorie, setModal, id }) {
    return (
        <Link href={`/projets/${encodeURIComponent(id)}`} className={styles.link}>
            <div 
                onMouseEnter={() => {setModal({active: true, index})}} 
                onMouseLeave={() => {setModal({active: false, index})}}
                className={styles.project}
            >
                <h2>{title}</h2>
                <p className='font-titre'>{categorie}</p>
            </div>
        </Link>
    );
}