import { presentation, entryLabels } from '@/lib/presentation'
import OfferingIcon from './OfferingIcon'
export default function OfferingVisual({ category, slug, title }: { category: string; slug?: string; title?: string }) {
 const theme = presentation[category]
 const entry = slug ? entryLabels[slug] : undefined
 const stages = entry?.flow ?? theme.stages
 return <div className="offering-visual" aria-label={`${title ?? category} workflow illustration`}>
   <div className="visual-orbit orbit-one" aria-hidden="true" /><div className="visual-orbit orbit-two" aria-hidden="true" />
   <div className="visual-topline"><span className="visual-brand">DEVSKAMP / {category.toUpperCase()}</span><span className="visual-dot" aria-hidden="true" /></div>
   <div className="visual-heading"><div className="visual-symbol"><OfferingIcon name={entry?.glyph ?? (category === 'products' ? 'workflow' : category === 'services' ? 'code' : 'connect')} className="w-7 h-7" /></div><p>{title ?? theme.heading}</p></div>
   <p className="visual-caption">{entry ? entry.label : theme.label}</p>
   <div className="visual-flow">{stages.map((stage, index) => <div className="visual-stage" key={stage}><span className="visual-stage-number">0{index + 1}</span><span>{stage}</span><span className="visual-stage-mark" aria-hidden="true">{index === stages.length - 1 ? '✓' : '↓'}</span></div>)}</div>
   <div className="visual-bottom"><span>Workflow concept</span><span>People · systems · decisions</span></div>
 </div>
}
