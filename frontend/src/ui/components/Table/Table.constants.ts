export const PAGE_SIZE = 8;

export const MAX_CELL_TEXT_LENGTH = 8;

export const USER_TABLE_COLUMNS = [
  { name: "" },
  { name: "_id" },
  { name: "name", sort: true, type: "string", filter: true },
  { name: "email", sort: true, type: "string", filter: true },
  { name: "roles" },
  { name: "createdAt", sort: true, type: "number" },
  { name: "updatedAt", sort: true, type: "number" },
  { name: "lastLoggedIn", sort: true, type: "number" },
  { name: "rating", sort: true, type: "number" },
];
