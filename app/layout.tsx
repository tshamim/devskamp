import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Devskamp LLC — Agile Offshore Software Development | Utah & Dhaka',
  description:
    'Devskamp LLC is a USA-based software company with an elite engineering hub in Dhaka, Bangladesh. We deliver custom software, cloud infrastructure (AWS/GCP), AI & ML solutions, IoT systems, cybersecurity, and digital marketing for enterprises and startups worldwide.',
  keywords: [
    'offshore software development',
    'agile software development',
    'custom software company Utah',
    'AWS cloud services',
    'GCP cloud migration',
    'AI development company',
    'machine learning solutions',
    'IoT development hardware',
    'digital marketing agency',
    'cybersecurity services',
    'blockchain development',
    'staff augmentation',
    'software company Dhaka Bangladesh',
    'enterprise software solutions',
  ],
  authors: [{ name: 'Devskamp LLC' }],
  openGraph: {
    title: 'Devskamp LLC — Smart Enterprise Technology Solutions',
    description:
      'Agile offshore software development, cloud, AI, IoT & digital marketing. Utah, USA + Dhaka, Bangladesh.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Devskamp LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devskamp LLC — Agile Offshore Development',
    description: 'Enterprise software, cloud, AI, IoT and digital marketing from Utah & Dhaka.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://devskamp.com' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var obs = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
                  });
                },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
                document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
