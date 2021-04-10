import { TablePagination } from "@material-ui/core";
import React from "react";

const Pagination = (props) => {
  const { count, page, rowsPerPage, onChangePage, onChangeRowsPerPage } = props;

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onChangePage={(e, newPage) => {
        onChangePage(e, newPage);
      }}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={(e) => onChangeRowsPerPage(e)}
      rowsPerPageOptions={[10, 20, 50, 100]}
      labelDisplayedRows={({ from, to, count }) => {
        return `${from}-${to} de ${count}`;
      }}
      labelRowsPerPage="Elementos por pagina"
    />
  );
};
export default Pagination;
