/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "primereact/datatable";
import { Column, ColumnProps } from "primereact/column";
import { useState } from "react";

interface TableProps {
  columns: ColumnProps[];
  rows: any[];
  rowsSize: number;
  selectionMode: "single" | "multiple" | undefined;
  handleSelectedItems: any;
}

const MainTable = (props: TableProps) => {
  const { rows, columns, rowsSize = 8, handleSelectedItems } = props;

  const [selectItems, setSelectItems] = useState([]);

  const leftPaginator =
    selectItems?.length > 0
      ? `${selectItems?.length} Registros seleccionados`
      : `Total ${rows.length} registros`;

  const onSelectItems = (e: any) => {
    setSelectItems(e.value);
    handleSelectedItems(e.value);
  };

  return (
    <>
      <DataTable
        dataKey="id"
        value={rows}
        paginator
        rows={rowsSize}
        sortMode="multiple"
        selectionMode="checkbox"
        selection={selectItems}
        onSelectionChange={onSelectItems}
        paginatorLeft={leftPaginator}
      >
        <Column selectionMode="multiple" headerStyle={{ width: "1rem" }} />
        {columns.map((col: ColumnProps) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            sortable={col.sortable}
            body={col.body}
            style={{ width: col.width }}
            headerStyle={col.headerStyle}
          />
        ))}
      </DataTable>
    </>
  );
};

export default MainTable;
