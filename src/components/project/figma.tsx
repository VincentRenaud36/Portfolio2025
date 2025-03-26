"use client";
import { GET_PROJET_BY_ID } from '@/lib/queries';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';


export default function Figma() {

    const params = useParams();
    const id = params.id ? decodeURIComponent(params.id as string) : '';

    const { loading, error, data } = useQuery(GET_PROJET_BY_ID, {
        variables: { id }
    });
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;
    if (!data || !data.projets || data.projets.length === 0) {
        return <p>Projet non trouvé</p>;
    }
    const projet = data.projets[0];
    
    return (
        <div className='w-full flex justify-center items-center'>
            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="650"
        src={projet.urlProjet} allowFullScreen></iframe>
        </div>
)
}