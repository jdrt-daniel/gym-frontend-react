import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Badge } from "primereact/badge";
// import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import { MainTable } from "../../../components";
import { getList } from "../services";
interface Product {
  id: string;
  code: string;
  name: string;
  lastname: string;
  avatar: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}
const List = () => {
  const API = import.meta.env.VITE_NEST_API;

  const avatarRegister = (product: Product) => {
    return (
      <a
        className="d-flex align-items-center text-1100 cursor-pointer "
        onClick={() => alert(product.id)}
      >
        <div className="avatar avatar-m">
          <img
            src={`${API}/files/${product.avatar}`}
            alt={product.avatar}
            className="w-6rem shadow-2 border-round"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <p className="mb-0 ms-3 text-1100 fw-bold">
          {product.name} {product.lastname}
        </p>
      </a>
    );
  };
  const columns = [
    {
      field: "name",
      header: "Nombre del cliente",
      sortable: false,
      body: avatarRegister,
    },
    {
      field: "code",
      header: "CODIGO",
      sortable: false,
      width: "150px",
      body: (e) => <b> {e.code}</b>,
    },
    {
      field: "nit",
      header: "NIT/CI",
      sortable: false,
      width: "150px",
    },
    {
      field: "gender",
      header: "GENERO",
      sortable: false,
      body: (e) => <>{e.gender == "M" ? "Hombre" : "Mujer"}</>,
      width: "10%",
    },
    {
      field: "phones",
      header: "TELEFONOS",
      sortable: false,
      width: "10%",
      body: (e) =>
        e.phones.length > 0 ? (
          <Dropdown
            options={e.phones}
            value={e.phones[0]}
            className="w-full md:w-14rem"
          />
        ) : (
          <span>Sin teléfonos</span>
        ),
    },
    {
      field: "isActive",
      header: "ESTADO",
      sortable: false,
      body: (e) => (
        <>
          {e.isActive ? (
            <Badge value="Activo" severity="success" />
          ) : (
            <Badge value="Inactivo" severity="danger" />
          )}
        </>
      ),
      width: "10%",
    },
    {
      field: "created_date",
      header: "FECHA DE CREACION",
      sortable: false,
      body: (e) => <>{moment(e.created_date).format("DD/MM/YYYY, LT")}</>,
      width: "15%",
    },
  ];

  const [products, setProducts] = useState([]);
  const [itemsSelected, setItemsSelected] = useState<Product[]>([]);
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const [visible, setVisible] = useState<boolean>(false);
  const [updateMassive, setupdateMassive] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const accept = () => {
    toast.current?.show({
      severity: "success",
      summary: "Correcto",
      detail: "Se confirmo la acción",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Cancelado",
      detail: "Se canceló la acción",
      life: 3000,
    });
  };

  // const actionButtons = (product: Product) => {
  //   return (
  //     <div className="flex flex-row flex-wrap">
  //       <Button
  //         severity="info"
  //         text
  //         raised
  //         icon="pi pi-pencil"
  //         className="me-2"
  //         onClick={() => alert(product.id)}
  //         size="small"
  //       />
  //       <Button
  //         severity="danger"
  //         text
  //         raised
  //         icon="pi pi-trash"
  //         onClick={() => alert(product.id)}
  //         size="small"
  //       />
  //     </div>
  //   );
  // };

  const execEvent = (items: Product[]) => {
    setItemsSelected(items);
  };

  const onColumnToggle = (event) => {
    console.log(event.value);
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };
  const onLoadData = async () => {
    try {
      const data = await getList();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <div className="">
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span>Todos </span>
              <span className="text-700 fw-semi-bold">({products.length})</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Nuevos</span>
              <span className="text-700 fw-semi-bold">(0)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Retirados </span>
              <span className="text-700 fw-semi-bold">(0)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Renovados </span>
              <span className="text-700 fw-semi-bold">(0) </span>
            </a>
          </li>
        </ul>
        <div>
          {visibleColumns.map((el) => (
            <p>{el.field}</p>
          ))}
          {columns.map((el) => (
            <p>{el.field}</p>
          ))}
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
                <div className="search-box">
                  <form
                    className="position-relative"
                    data-bs-toggle="search"
                    data-bs-display="static"
                  >
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon"></span>
                  </form>
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
                <div className="btn-group position-static" role="group">
                  <div className="btn-group position-static text-nowrap">
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      Todos
                      <span className="fas fa-angle-down ms-2"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Todos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Activos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Inactivos
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group position-static text-nowrap">
                    <MultiSelect
                      value={visibleColumns}
                      options={columns}
                      optionLabel="header"
                      onChange={onColumnToggle}
                      className="w-full sm:w-20rem"
                      display="chip"
                    />
                  </div>
                  {itemsSelected.length > 0 ? (
                    <div className="btn-group position-static text-nowrap">
                      <button
                        className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        Acciones masivas
                        <span className="fas fa-angle-down ms-2"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => setupdateMassive(true)}
                          >
                            Actualización masiva
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => setVisible(true)}
                          >
                            Inhabilitación masiva
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fas fa-plus me-2"></span>Nuevo cliente
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-3 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <div className="table-responsive scrollbar-overlay mx-n1 px-1">
              <MainTable
                columns={visibleColumns}
                rows={products}
                rowsSize={8}
                selectionMode="multiple"
                handleSelectedItems={execEvent}
              />
            </div>
          </div>
        </div>
        <Toast ref={toast} position="bottom-right" />
        <ConfirmDialog
          visible={visible}
          onHide={() => setVisible(false)}
          message="¿Estas seguro de inhabilitar este registro?"
          header="Confirmar"
          icon="pi pi-exclamation-triangle text-warning"
          accept={accept}
          reject={reject}
          acceptLabel="Si, inhabilitar"
          rejectLabel="Cancelar"
          rejectClassName="p-button-raised p-button-text p-button-secondary"
          acceptClassName="p-button-raised p-button-danger"
          style={{ minWidth: "20%" }}
        />
        <Dialog visible={updateMassive} onHide={() => setupdateMassive(false)}>
          {itemsSelected.map((el) => (
            <p key={el.id}>{el.id}</p>
          ))}
        </Dialog>
      </div>
    </>
  );
};

export default List;
