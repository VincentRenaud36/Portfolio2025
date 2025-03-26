"use client";
import { GET_PROJET_BY_ID } from '@/lib/queries';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import Link from "next/link";

export default function     Description() {
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
    const outils = projet.outilProjet[0].replace(/"/g, '').split(',');

    let productions = [];
if (projet.productionProjet) {
    productions = projet.productionProjet
        .replace(/^"|"$/g, '') // Supprime les guillemets extérieurs
        .replace(/"/g, '') // Supprime les guillemets internes
        .split(',') // Divise la chaîne par les virgules
        .map(item => item.trim()); // Nettoie les espaces
}
// console.log(projet.productionProjet);

    return (
        <div>
            <Link href={'/'} className="text-3xl inline-block mb-10">←</Link>
            <div className="flex">
                <div className=''>
                    <h1 className="text-5xl font-titre uppercase leading-[60px]">{projet.titrePageProjet}</h1>
                    <div className="text-xl mt-10 mb-32 flex leading-[33px] text-justify gap-[60px]">
                        <p className=''>
                            {projet.contexteProjet}
                        </p>
                        <p className=''>
                            {projet.descriptionProjet}
                        </p>
                        <div className='text-nowrap'>
                    <h2 className='text-xl font-titre'>Productions</h2>
                    <ul className="ml-8 mt-5 list-disc">
                        {productions.map((production, index) => (
                            <li className='mt-3' key={index}>{production}</li> // Ajout de la liste à puces
                        ))}
                    </ul>
                    <h2 className='mt-10 text-xl font-titre'>Outils utilisés</h2>
                    <ul className="ml-8 mt-5 list-disc">
                    {outils.map((outil, index) => (
                        <li className='mt-3' key={index}>{outil.trim()}</li> // Ajout de la liste à puces
                    ))}
                    </ul>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}