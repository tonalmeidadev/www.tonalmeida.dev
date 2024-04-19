import { Footer } from '@/components/Footer'
import { Grid } from '@/components/Grid'
import { Header } from '@/components/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen justify-center p-8">
        <div className="flex w-full max-w-[1080px] flex-col gap-24">
          <Grid />
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
