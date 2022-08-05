import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { TextField, Container, Typography, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { problemsCols, problemsRows } from "../../data/dataProblems";
import { contestesRows } from "../../data/dataContestes";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
function AddContestes() {
  const [select, setSelection] = useState([]);
  const [newContest, setNewContest] = useState({
    name: " ",
    problemsNum: "",
    state: "",
    price: "",
    problems: [],
    languages: [],
  });

  useEffect(() => {
    setNewContest({
      ...newContest,
      problemsNum: select.length,
      problems: select.map((p) => p.id),
    });
  }, [select]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // const names = ["c++", "java", "javaScript", "python", "c", "c#"];
  const names = [
    { id: 1, name: "c++" },
    { id: 2, name: "java" },
    { id: 3, name: "javaScript" },
    { id: 4, name: "python" },
    { id: 5, name: "c" },
    { id: 6, name: "c#" },
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  useEffect(() => {
    setNewContest({
      ...newContest,
      languages: personName,
    });
  }, [personName]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} xl={4}>
          <Typography variant="body1" mt={5} mb={1}>
            Name of the contaest
          </Typography>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
            onChange={(e) =>
              setNewContest({ ...newContest, name: e.target.value })
            }
          />
          <Grid container mt={2} spacing={2}>
            <Grid item xs={12} md={6} xl={6}>
              <Typography variant="body1" mt={2} mb={1}>
                State
              </Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                label="state"
                variant="outlined"
                onChange={(e) =>
                  setNewContest({ ...newContest, state: e.target.value })
                }
              />
            </Grid>
            <Grid item spacing={2} xs={12} md={6} xl={6}>
              <Typography variant="body1" mt={2} mb={1}>
                Price
              </Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                label="price"
                variant="outlined"
                onChange={(e) =>
                  setNewContest({ ...newContest, price: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Typography variant="body1" mt={2} mb={1}>
              languages
            </Typography>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">languages</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={names.find((e) => e.id === value)?.name}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name.id}
                    id={name.id}
                    value={name.id}
                    style={getStyles(name, personName, theme)}
                  >
                    {name.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <Box sx={{ height: 400, width: "100%" }} mt={4} mb={2}>
            <DataGrid
              rows={problemsRows}
              columns={problemsCols}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = problemsRows.filter((row) =>
                  selectedIDs.has(row.id)
                );

                setSelection(selectedRows);
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Button onClick={() => console.log(newContest)}>add contest</Button>
    </Container>
  );
}
export default AddContestes;
