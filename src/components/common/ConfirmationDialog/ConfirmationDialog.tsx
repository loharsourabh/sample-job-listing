import AppButton from "../AppButton/AppButton";

interface Props {
  onSuccess(): void;
  onClose(): void;
}

export default function ConfirmationDialog({ onSuccess, onClose }: Props) {
  function handleConfirm() {
    onSuccess();
    onClose();
  }

  return (
    <div className="special-class fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-5">
      <div className="rounded-md bg-white p-8 text-center">
        <h2 className="mb-1 text-xl">Are you sure?</h2>
        <p className="mb-8">This item will be deleted.</p>

        <div className="flex gap-8">
          <AppButton variant="light" onClick={onClose}>
            Cancel
          </AppButton>
          <AppButton onClick={handleConfirm}>Confirm</AppButton>
        </div>
      </div>
    </div>
  );
}
