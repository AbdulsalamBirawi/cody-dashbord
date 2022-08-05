import { contestesCols, contestesRows } from "../../data/dataContestes";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { fetchWithJwt } from "../../shared/fetchWithJWT";

function Contestes() {
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }} mt={4} mb={2}>
        <DataGrid
          rows={contestesRows}
          columns={contestesCols}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}

export default Contestes;
