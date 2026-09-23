export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent hover:text-bg print:hidden"
    >
      [{label}]
    </button>
  );
}
