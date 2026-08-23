import { useState } from "react";
import Formbox from "react-form-toaster";
import { Button } from "@/components/ui/Button";
import { usePlayground } from "@/components/playground/PlaygroundProvider";

type PlaygroundPreviewProps = {
  className?: string;
};

export function PlaygroundPreview({ className = "" }: PlaygroundPreviewProps) {
  const {
    preset,
    resetKey,
    previewMode,
    liveFields,
    liveSchema,
    setSubmittedResponse,
  } = usePlayground();
  const { formConfig, buttons } = preset;
  const [modalOpen, setModalOpen] = useState(true);

  const formbox = (
    <Formbox
      key={`${preset.id}-${resetKey}-${previewMode}`}
      open={previewMode === "inline" ? true : modalOpen}
      onOpenChange={setModalOpen}
      mode={previewMode}
      closeFormIcon={previewMode === "modal"}
      schema={liveSchema}
      fields={liveFields}
      buttons={buttons}
      title={formConfig.title}
      description={formConfig.description}
      errorPosition={formConfig.errorPosition}
      toast={
        formConfig.toast ?? {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Could not send message",
        }
      }
      containerClassName={formConfig.containerClassName}
      innerContainerClassName={formConfig.innerContainerClassName}
      buttonContainerClassName={formConfig.buttonContainerClassName}
      inputClassName={formConfig.inputClassName}
      labelClassName={formConfig.labelClassName}
      requiredClassName={formConfig.requiredClassName}
      errorClassName={formConfig.errorClassName}
      onSubmit={async (data) => {
        setSubmittedResponse(data as Record<string, unknown>);
        console.log(`${preset.id} submitted:`, data);
        await new Promise((resolve) => setTimeout(resolve, 600));
      }}
    />
  );

  return (
    <div className={className}>
      {previewMode === "modal" ? (
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs text-muted">
            Toggle <strong className="text-text">Modal</strong> — unique to
            react-form-toaster. Same schema, popup Formbox.
          </p>
          <Button onClick={() => setModalOpen(true)} size="sm">
            Open modal preview
          </Button>
          {formbox}
        </div>
      ) : (
        formbox
      )}
    </div>
  );
}
