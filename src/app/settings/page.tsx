import Form from "../ui/Setting/Form"

export default function Page() {
  return (
    <main className='flex flex-col w-full h-full'>
      <h1 className='text-2xl font-bold p-2'>Units</h1>
      <div className='flex flex-col w-full h-full bg-gray-800 rounded-3xl p-6'>
        <Form />
      </div>
    </main>
  )
}
