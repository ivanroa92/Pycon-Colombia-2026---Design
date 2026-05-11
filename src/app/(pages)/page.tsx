import Hero from '@/components/blocks/hero-section/hero-section'
import PyconVisualHero from '@/components/blocks/pycon-visual-hero/pycon-visual-hero'
import TrustedBrands from '@/components/blocks/trusted-brands/trusted-brands'
import Benefits from '@/components/blocks/benefits/benefits'
import Sponsors from '@/components/blocks/sponsors/sponsors'
import Gallery from '@/components/blocks/gallery/gallery'
import CTA from '@/components/blocks/cta/cta'

import { topics } from '@/assets/data/trusted-brands'
import { benefits } from '@/assets/data/benefits'

import SectionSeparator from '@/components/section-separator'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Flow',
      description:
        'Grow your product faster with an all-in-one sales and analytics platform. Track performance, automate follow-ups, and make smarter decisions easily.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = () => {
  return (
    <>
      <PyconVisualHero />

      <SectionSeparator />

      <Hero />

      <SectionSeparator />

      <TrustedBrands topics={topics} />

      <SectionSeparator />

      <Benefits featuresList={benefits} />

      <SectionSeparator />

      <Sponsors />

      <SectionSeparator />

      <Gallery />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
