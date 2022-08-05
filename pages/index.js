import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import { ContestantsColumns, ContestantsRows } from "../data/dataContestants";
import { contestesCols, contestesRows } from "../data/dataContestes";
import Contestes from "./contestes/index";
import Button from "@mui/material/Button";
import Wrapper from "../components/withPrivateRoute";
function Home() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h4" mt={4}>
          Contestants data
        </Typography>
        <Box sx={{ height: 400, width: "100%" }} mt={4}>
          <DataGrid
            rows={ContestantsRows}
            columns={ContestantsColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
        <Typography variant="h4" mt={2}>
          Contestes data
        </Typography>
        <Contestes />
        <Box mt={2} mb={2}>
          <Button color="primary" href="/addContestes" variant="contained">
            Add contest
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Home;
