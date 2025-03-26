'use client'
import Scene from '@/components/Paint/Scene';
import Text from '@/components/Paint/Text';
import { useState, useEffect } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';
import Lenis from 'lenis';
import Footer from "@/components/Footer/Footer1";
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from '@/lib/queries';


export default function Home() {
  const [modal, setModal] = useState({active: false, index: 0})
  const { loading, error, data } = useQuery(GET_DATA);
 
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (data && data.projets) {
      console.log('Projets disponibles:', data.projets);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
          <div className="flex w-full h-screen items-center justify-center">
            <Text />
            <Scene />
          </div>
          <div className='flex items-center justify-center py-24'>
            <div className="flex items-center justify-center flex-col w-2/3">
              {
                data.projets.map((projet, index) => (
                  <Project 
                    key={projet.id}
                    index={index} 
                    id={projet.id}
                    title={projet.nomProjet} 
                    categorie={projet.categorieProjet} 
                    setModal={setModal}
                  />
                ))
              }
            </div>
            <Modal modal={modal} projects={Project}/>
          </div>
          <Footer />
    </>
  );
}