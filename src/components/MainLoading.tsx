import { ProgressSpinner } from "primereact/progressspinner";
const MainLoading = () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginTop: "20%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ProgressSpinner
        aria-label="Cargando..."
        style={{ width: "100px", height: "100px" }}
        strokeWidth="4"
      />
    </div>
  );
};
export default MainLoading;
