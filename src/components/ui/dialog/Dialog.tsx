import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: DialogProps) {
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
      aria-describedby={description ? "dialog-description" : undefined}
    >
      <button
        type="button"
        aria-label="Tutup dialog"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950/95 p-6 shadow-2xl shadow-black/40",
          className
        )}
      >
        <button
          type="button"
          aria-label="Tutup dialog"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {(title || description) && (
          <div className="mb-6 pr-10">
            {title && (
              <h2
                id="dialog-title"
                className="text-xl font-semibold tracking-tight text-white"
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                id="dialog-description"
                className="mt-2 text-sm leading-6 text-zinc-400"
              >
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>,
    document.body
  );
}

export { Dialog };
