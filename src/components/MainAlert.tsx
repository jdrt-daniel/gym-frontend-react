import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

const MainAlert = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <Toast ref={toast} position="bottom-right" />
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Confirmar"
        style={{ minWidth: "20%" }}
        footer={footerContent}
      ></Dialog>
    </>
  );
};

export default MainAlert;
