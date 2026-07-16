import { useState } from 'react';
import BackHeader from './BackHeader';

const IMAGES = Array.from({ length: 8 }, (_, i) => `./appendices/appendix${i + 1}.png`);

export default function Appendix({ onBack }: { onBack: () => void }) {
  const [zoom, setZoom] = useState<string | null>(null);
  return (
    <>
      <BackHeader title="Appendix" onBack={onBack} />
      <main className="flex-1 space-y-4 p-4">
        {IMAGES.map((src, i) => (
          <button key={i} onClick={() => setZoom(src)} className="block w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img src={src} alt={`Appendix ${i + 1}`} className="w-full" loading="lazy" />
          </button>
        ))}
      </main>
      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2" onClick={() => setZoom(null)}>
          <img src={zoom} alt="Appendix" className="max-h-full max-w-full object-contain" style={{ touchAction: 'pinch-zoom' }} />
        </div>
      )}
    </>
  );
}
