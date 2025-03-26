import React from 'react'
import Link from 'next/link'
import { GET_DATA } from '@/lib/queries';
import { useQuery } from '@apollo/client';

function NextProject() {

    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    // Supposons que vos projets sont dans data.projets
    const projects = data.projets;


    console.log(projects.index);

  return (
    <div>
        <Link href={'/'} className="text-3xl inline-block mb-10 mt-10">Prochain projet →</Link>
    </div>
  )
}

export default NextProject