import React from 'preact/compat'
import { useState } from 'preact/hooks'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex flex-col items-center justify-center h-full gap-8">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Home</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:scale-95 transition-all duration-50" onClick={() => setCount(count + 1)}>Click me</button>
        <p className="text-sm">Count: {count}</p>
      </section>
    </main>
  )
}