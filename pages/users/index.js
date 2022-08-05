import { useState, useEffect } from "react";
import * as React from "react";
import {
  ContestantsColumns,
  ContestantsRows,
} from "../../data/dataContestants";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BASE_URL } from "../../env";
import { fetchWithJwt } from "../../shared/fetchWithJWT";

function Users() {
  const [role, setRule] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [rules, setRules] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const handleChange = (event) => {
    const thisId = event.target.value;
    setRule(rules.find((e) => e.id === thisId));
  };
  const SubmitUser = async () => {
    const response = await fetchWithJwt("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log(data);
    setRefresh((e) => !e);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get() {
      const response = await fetchWithJwt(`/api/roles`);
      const data = await response.json();
      console.log({ data });
      setRules(data);
      const json = await fetchWithJwt("/api/profiles");
      const _data = await json.json();
      setData(_data);
    }

    get();
  }, [refresh]);
  useEffect(() => {
    setUser({ ...user, role });
  }, [role]);
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item m={3}>
            <Typography variant="h4" mt={2} mb={2}>
              Add user
            </Typography>
            <Typography variant="body1" mb={2}>
              {" "}
              User Name
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="User Name"
                id="fullWidth"
                onChange={(event) => {
                  setUser({ ...user, username: event.target.value });
                }}
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <Typography variant="body1" mb={2} mt={2}>
                {" "}
                Email
              </Typography>
              <TextField
                fullWidth
                label="email"
                id="fullWidth"
                type="email"
                onChange={(event) => {
                  setUser({ ...user, email: event.target.value });
                }}
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <Typography variant="body1" mb={2} mt={2}>
                {" "}
                Password
              </Typography>
              <TextField
                fullWidth
                label="Password"
                id="fullWidth"
                type="password"
                onChange={(event) => {
                  setUser({ ...user, password: event.target.value });
                }}
              />
            </Box>
          </Grid>
          <Grid container item mt={2}>
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">rule</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={role.name}
                  label="rule"
                  onChange={handleChange}
                >
                  {rules?.map((rule) => {
                    return <MenuItem value={rule.id}>{rule.name}</MenuItem>;
                  })}
                  {/* <MenuItem value="admin">Admain</MenuItem>
                  <MenuItem value="Contestens">Contestens</MenuItem>
                  <MenuItem value="Creater">Creater</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item ml={5} mt={1}>
              <Button variant="outlined" onClick={SubmitUser}>
                add user
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h4" mt={4}>
          Contestants data
        </Typography>
        <Box sx={{ height: 400, width: "100%" }} mt={4}>
          <DataGrid
            rows={data}
            columns={ContestantsColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}

export default Users;
