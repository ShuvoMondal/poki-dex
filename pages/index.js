import Layout from '../components/Layout'
import Link from 'next/link'

export const getStaticProps = async() =>{

  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();

    return{
      props: { pokemons: data.results }
    }
  }
  catch(err){
    console.error(err);
  }
}

export default function Home({pokemons}) {
  // console.log(pokemons);
  return (
    <Layout title="PokiDex">
      <h1 className="text-3xl items-center text-center font-semibold mb-6">PokiDex</h1> 

      {/* Pokemon list */}
      {/* TODO: Add pokemon images (Future feature) */}
      {pokemons.map((pokemon, index) =>(
        <div key={index+1} className=" my-8 py-4 px-6 text-lg font-medium shadow-md border-t-yellow-400 border-t-4 bg-white first-letter:capitalize hover:bg-yellow-50">
          <Link href={`/pokemon?id=${index +1}`}>
            <a>{pokemon.name}</a>
          </Link>
          <span className="float-right">#{index+1}</span>
        </div>
      ))} 
           
    </Layout>  
  )
}
