const paths: Record<string, string> = {
 commerce: 'M3 5h2l2 11h11l3-8H6M9 20h.01M18 20h.01',
 people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 workflow: 'M4 3h6v6H4zM14 15h6v6h-6zM7 9v9h7M10 6h7v9',
 logistics: 'M2 6h12v12H2zM14 10h4l4 4v4h-8M6 18v2M18 18v2M18 10v4h4',
 device: 'M7 7h10v10H7zM9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M1 15h6M17 9h6M17 15h6M10 10h4v4h-4z',
 intelligence: 'm12 2 2.8 6.6L22 12l-7.2 3.4L12 22l-2.8-6.6L2 12l7.2-3.4L12 2',
 connect: 'M4 4h16v12H9l-5 4V4M8 8h8M8 12h5',
 building: 'M4 22V5h10v17M14 11h6v11M2 22h20M8 9h2M8 13h2M8 17h2M17 15h1M17 19h1',
 code: 'm8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18',
 cloud: 'M6 18a4 4 0 1 1 0-8 6 6 0 0 1 11.7-1.6A5 5 0 1 1 19 18H6M12 12v10M9 19l3 3 3-3',
 design: 'M3 3h18v18H3zM3 9h18M9 9v12M6 6h.01M10 6h.01M14 6h.01',
 shield: 'M12 2 21 6v6c0 5-9 10-9 10S3 17 3 12V6l9-4M8 12l3 3 5-6',
 data: 'M3 5c0-4 18-4 18 0s-18 4-18 0M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0',
 growth: 'M3 21V3M3 21h18M6 15l5-5 4 3 6-8M16 5h5v5',
 health: 'M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3',
 education: 'm2 9 10-6 10 6-10 6-10-6M6 12v6l6 3 6-3v-6M22 9v9',
}
export default function OfferingIcon({ name, className = '' }: { name: string; className?: string }) {
 return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}><path d={paths[name] ?? paths.workflow} /></svg>
}
