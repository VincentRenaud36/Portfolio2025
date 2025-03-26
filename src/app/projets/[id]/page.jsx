'use client';
import Figma from '@/components/project/figma';
import styles from './page.module.css';
import Description from '@/components/project/description';
// import NextProject from '@/components/project/nextProject';

export default function ProjetPage(){
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                {/* <Line /> */}
                <Description />
                <Figma />
                {/* <NextProject /> */}
            </div>
        </div>
    );
};