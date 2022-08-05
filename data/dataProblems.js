export const problemsCols = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "rate",
    headerName: "Rate",
    width: 150,
    type: "number",
    sortable: true,
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 150,
    sortable: true,
  },
];

export const problemsRows = [
  { id: 1, name: "problems 1", rate: 1500, tag: "graph" },
  { id: 2, name: "problems 2", rate: 1600, tag: "graph" },
  { id: 3, name: "problems 3", rate: 1700, tag: "dp" },
  { id: 4, name: "problems 4", rate: 1800, tag: "dp" },
  { id: 5, name: "problems 5", rate: 1900, tag: "binery search" },
  { id: 6, name: "problems 6", rate: 2000, tag: "binery search" },
  { id: 7, name: "problems 7", rate: 1100, tag: "greedy" },
  { id: 8, name: "problems 8", rate: 1200, tag: "greedy" },
  { id: 9, name: "problems 9", rate: 1300, tag: "game theory" },
];
