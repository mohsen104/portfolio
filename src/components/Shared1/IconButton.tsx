export function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-md border-2 border-black bg-white transition -translate-y-0.5 shadow-[3px_3px_0_#000] hover:translate-0 hover:shadow-none"
    >
      <span className="sr-only">{ariaLabel}</span>
      <span className="[&>svg]:h-4 [&>svg]:w-4">{children}</span>
    </button>
  );
}
