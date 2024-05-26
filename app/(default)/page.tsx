export const metadata = {
  title: 'Bourgeon - Business Development',
  description: 'Turn your idea into a working product',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Features03 />
      <Features02 />

      {/* <PricingTabs /> */}
      <Testimonials />
      <Cta />
    </>
  )
}
