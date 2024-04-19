import LastCities from '../ui/Cities/LastCities'
import ResultList from '../ui/Weather/resultList'
import { searchCity } from '../api/utils'

export default async function Page({
  searchParams,
}: {
  searchParams?: { search?: string }
}) {
  let data = []
  if (searchParams?.search) {
    data = await searchCity(searchParams?.search)
  }
  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        width: '100%',
        height: '85vh',
        alignItems: 'start',
      }}
    >
      {data[0] != undefined && <ResultList data={data} />}
      <LastCities />
    </main>
  )
}
