import { ArrowRightIcon } from 'lucide-react'

import Link from 'next/link'

import { sponsorTiers, type SponsorTier } from '@/assets/data/sponsors'
import { Badge } from '@/components/ui/badge'
import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { assetPath, cn } from '@/lib/utils'

const sponsorDeckUrl = 'mailto:sponsors@pycon.co?subject=PyCon%20Colombia%202026%20Sponsorship'

const tierStyles = {
  'Venue Sponsor': {
    grid: 'grid-cols-1',
    card: 'min-h-52 sm:min-h-64',
    logo: 'max-h-50 w-full max-w-full sm:max-h-65 sm:max-w-198',
    slots: '1'
  },
  'Platinum Sponsor': {
    grid: 'grid-cols-1 sm:grid-cols-2',
    card: 'min-h-48 sm:min-h-56',
    logo: 'max-h-68 w-full max-w-254 sm:max-h-88 sm:max-w-346',
    slots: '2 max'
  },
  'Gold Sponsor': {
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    card: 'min-h-42 sm:min-h-50',
    logo: 'max-h-20 max-w-64 sm:max-h-24 sm:max-w-80',
    slots: '3 per row'
  },
  'Silver + Sponsor': {
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    card: 'min-h-36 sm:min-h-44',
    logo: 'max-h-16 max-w-56 sm:max-h-20 sm:max-w-68',
    slots: '4 per row'
  },
  'Silver Sponsor': {
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    card: 'min-h-36 sm:min-h-44',
    logo: 'max-h-16 max-w-56 sm:max-h-20 sm:max-w-68',
    slots: '4 per row'
  },
  'Bronze Sponsor': {
    grid: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    card: 'min-h-32 sm:min-h-40',
    logo: 'max-h-14 max-w-48 sm:max-h-18 sm:max-w-60',
    slots: '5 per row'
  },
  'Start up Sponsor': {
    grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8',
    card: 'min-h-28 sm:min-h-34',
    logo: 'max-h-12 max-w-36 sm:max-h-16 sm:max-w-44',
    slots: '8 per row'
  },
  Partner: {
    grid: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10',
    card: 'min-h-24 sm:min-h-30',
    logo: 'max-h-10 max-w-32 sm:max-h-14 sm:max-w-38',
    slots: '10 per row'
  }
} satisfies Record<SponsorTier['title'], { grid: string; card: string; logo: string; slots: string }>

const SponsorLogo = ({ tier }: { tier: SponsorTier }) => {
  const styles = tierStyles[tier.title]
  const sponsors = tier.sponsors.length > 0 ? tier.sponsors : [{ name: 'Open slot' }]
  const shouldCenterSingleLogo = tier.title === 'Platinum Sponsor' && sponsors.length === 1

  return (
    <div
      className={cn(
        'grid gap-3 sm:gap-4',
        styles.grid,
        shouldCenterSingleLogo && 'sm:grid-cols-1'
      )}
    >
      {sponsors.map(sponsor => {
        const content = (
          <div
            className={cn(
              'flex items-center justify-center rounded-lg border border-dashed p-4 text-center transition-colors sm:p-5',
              sponsor.href && 'hover:border-primary/50 hover:bg-primary/5',
              shouldCenterSingleLogo && 'w-full',
              styles.card
            )}
          >
            {sponsor.logo ? (
              <img
                src={assetPath(sponsor.logo)}
                alt={sponsor.name}
                className={cn('h-auto object-contain', styles.logo)}
              />
            ) : (
              <div className='space-y-2'>
                <p className={cn('font-semibold text-foreground', styles.logo)}>{sponsor.name}</p>
                <p className='text-muted-foreground text-sm'>Add sponsor logo in sponsors.ts</p>
              </div>
            )}
          </div>
        )

        return sponsor.href ? (
          <Link
            key={sponsor.name}
            href={sponsor.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${sponsor.name}`}
            className={cn('block', shouldCenterSingleLogo && 'w-full')}
          >
            {content}
          </Link>
        ) : (
          <div key={sponsor.name}>{content}</div>
        )
      })}
    </div>
  )
}

const Sponsors = () => {
  return (
    <section id='sponsors' className='overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:px-8'>
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='bg-background text-sm font-normal'>
              Sponsors
            </Badge>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.2} transition={{ duration: 0.5 }}>
            <h2 className='mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Support the Python community in Colombia
            </h2>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
              Sponsorship tiers are organized by visual hierarchy so each category reflects its level of support.
            </p>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
            <div className='flex justify-center'>
              <PrimaryFlowButton size='lg' asChild>
                <Link href={sponsorDeckUrl}>
                  Become a sponsor
                  <ArrowRightIcon />
                </Link>
              </PrimaryFlowButton>
            </div>
          </MotionPreset>
        </div>

        <div className='space-y-8 sm:space-y-10'>
          {sponsorTiers.map((tier, index) => {
            const styles = tierStyles[tier.title]

            return (
              <MotionPreset
                key={tier.title}
                fade
                blur
                slide={{ direction: 'up', offset: 30 }}
                delay={index * 0.06}
                transition={{ duration: 0.55 }}
              >
                <article className='h-full rounded-lg border border-dashed p-4 sm:p-5'>
                  <div className='mb-4 flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='text-lg font-semibold'>{tier.title}</h3>
                      <p className='text-muted-foreground mt-1 text-sm'>{tier.description}</p>
                    </div>
                    <span className='bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium'>
                      {styles.slots}
                    </span>
                  </div>
                  <SponsorLogo tier={tier} />
                </article>
              </MotionPreset>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
