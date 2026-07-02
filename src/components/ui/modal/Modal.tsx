import * as React from "react";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { Button } from "@/components/ui/button/button";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;
  description?: string;

  children?: React.ReactNode;

  confirmText?: string;
  cancelText?: string;

  confirmVariant?:
    | "default"
    | "gold"
    | "glass"
    | "outlineGold"
    | "destructive"
    | "ghost";

  loading?: boolean;

  onConfirm?: () => void;
  onCancel?: () => void;

  showFooter?: boolean;
}

function Modal({
  open,
  onOpenChange,

  title,
  description,

  children,

  confirmText = "Simpan",
  cancelText = "Batal",

  confirmVariant = "gold",

  loading = false,

  onConfirm,
  onCancel,

  showFooter = true,
}: ModalProps) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
    >
      <div className="space-y-6">
        {children}

        {showFooter && (
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="ghost"
              onClick={handleCancel}
              disabled={loading}
            >
              {cancelText}
            </Button>

            <Button
              variant={confirmVariant}
              onClick={handleConfirm}
              disabled={loading}
            >
              {loading ? "Memproses..." : confirmText}
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export { Modal };