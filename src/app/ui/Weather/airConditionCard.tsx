import Eye from '../icons/eye'

export default function AirConditionCard(
  data: {
    text: string
    value: number | string
    src: string
  },
  index: number
) {
  const { text, value, src } = data
  return (
    <div
      key={index}
      className='bg-gray-800 rounded-xl flex flex-col pl-4 gap-x-1 justify-center'
    >
      <span className='flex items-center gap-x-2'>
        {src === 'visibility' ? (
          <Eye />
        ) : (
          <picture>
            <img
              src={`/images/${src}.svg`}
              alt='weather icon'
              width={40}
              height={40}
            />
          </picture>
        )}

        <h4 className='text-white/70 text-xl'>{text}</h4>
      </span>
      <h4 className='text-white text-3xl font-bold ml-12'>{value}°</h4>
    </div>
  )
}
