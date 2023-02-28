import { useLazyQuery, useQuery } from '@apollo/client'
import { Header } from '../../components/Header'
import { GET_COUNTRIES } from '../../graphql/query/get-countries'
import { GET__SOUTH_AMERICA_COUNTRIES } from '../../graphql/query/get-south-america-countries';
import './styles.css'

type Country = {
  name: string;
  capital: string; 
  code: string;
}
type Continent = {

  continent: {
    name: string;
    countries: Country[]
  }
}
export const Home = () => {
  const { data, loading } = useQuery<{ countries: Country[] }>(GET_COUNTRIES)
  const southAmericaCode =  'SA'
  const [getSaCountries, { data: continentData, loading: continentLoading }] = useLazyQuery<Continent>(GET__SOUTH_AMERICA_COUNTRIES)

  if (loading || continentLoading) {
    return <p> Carregando... </p>
  }

  return (
    <div className='container'>
      <Header/>
      <section className='home-content content-flex justify-center gap-3'>
       <div>
        <h2>All Countries:</h2>
        <ul>
          {data?.countries.map(country => <li key={country.code}>{country.name}</li>)}
        </ul>
       </div>
       <div>
        <button onClick={() => getSaCountries({ variables: { code: southAmericaCode }})}> Select South America Countries </button>
        {continentData?.continent && 
          <div>
            <h2>{continentData.continent.name}</h2> 
            <ul>{continentData?.continent.countries.map(country => 
              <li key={country.code}>{country.name}</li>
            )}</ul> 
          </div>
        }
        
      
       </div>
      </section>
    </div>
  )
}


