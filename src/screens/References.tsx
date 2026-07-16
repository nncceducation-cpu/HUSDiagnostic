import { ExternalLink } from 'lucide-react';
import BackHeader from './BackHeader';
import { REFERENCES } from '../data/content';

export default function References({ onBack }: { onBack: () => void }) {
  return (
    <>
      <BackHeader title="References" onBack={onBack} />
      <main className="flex-1 space-y-3 p-5">
        {REFERENCES.map((url, i) => (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer"
             className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm active:bg-slate-50">
            <ExternalLink size={16} className="mt-0.5 flex-shrink-0 text-sky-600" />
            <span className="break-all text-[13px] text-sky-700">{url}</span>
          </a>
        ))}
      </main>
    </>
  );
}
