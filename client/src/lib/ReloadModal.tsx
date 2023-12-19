import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "@/components/ui/button";

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReloadModal: FC<ModalProps> = ({ open, setOpen }) => {
  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-white my-3 tracking-wide">
              Are you sure you want to leave this page?
            </DialogTitle>
            <DialogDescription className="text-lg text-red-100">
              You have unsaved changes. Are you sure you want to leave ?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <div className="flex justify-end gap-3">
              <Button
                variant="icon"
                className="rounded-xl"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <Button
                variant="destructive"
                className="rounded-xl"
                onClick={() => {
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Reload
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReloadModal;
