import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link';

export const getServerSideProps = async({ query }) => {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        return {
            props: { pokemon },
        };
    } catch (err) {
        console.error(err);
    }
}


export default function pokemon({pokemon}) {
    // console.log(pokemon)
    return (
        <Layout title={pokemon.name}>
            <div className="mb-10">
                <Link href="/"><a className="hover:text-yellow-400">/home</a></Link>
            </div>
            <div className="flex gap-6">
                <h1 className="text-3xl font-semibold first-letter:capitalize mb-2">{pokemon.name}</h1>
                <div className="flex-1 mb-2">
                    {pokemon.types.map((type, index) =>(
                        <p className="mr-4 mb-2 float-right first-letter:capitalize text-xl" key={index}>{type.type.name}</p>
                    ))}
                </div>
            </div><hr/>
            <div className="flex gap-6">
                <h2 className="m-2 ">Weight: {pokemon.weight}</h2>
                <h2 className="m-2">Height: {pokemon.height}</h2>
            </div>
        </Layout>
    )
}
