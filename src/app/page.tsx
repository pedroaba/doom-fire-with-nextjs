import { DoomFire } from './doom-fire'

export default function Home() {
  return (
    <main className="h-screen flex items-start justify-center flex-col space-y-12">
      <h1>Doom Fire with Next.js</h1>
      <DoomFire />
    </main>
  )
}
