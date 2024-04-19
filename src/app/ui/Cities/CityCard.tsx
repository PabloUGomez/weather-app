export default function CityCard({
  data,
}: {
  data: [city: { name: string; country: string }, index: number]
}) {
  const { name, country } = data[0]
  const index = data[1]

  return (
    <div
      className={`flex items-center w-full h-full rounded-xl px-6 py-12 transition-colors duration-300 ${
        index != 0
          ? 'bg-gray-800 hover:bg-gray-700'
          : 'border-2 border-sky-700 hover:bg-gray-700 hover:border-none'
      }`}
    >
      <span className='flex items-end gap-x-2'>
        <h3 className='text-2xl font-bold text-white'>{name}</h3>
        <p className='text-white'>{country}</p>
      </span>
    </div>
  )
}
