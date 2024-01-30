export const PAGE_SIZE = 8;

export const MAX_CELL_TEXT_LENGTH = 8;

export const USER_TABLE_COLUMNS = [
  { name: "_id", filter: true },
  { name: "name", sort: true, filter: true },
  { name: "email", sort: true, filter: true },
  { name: "roles" },
  { name: "createdAt", sort: true },
  { name: "updatedAt", sort: true },
  { name: "lastLoggedIn", sort: true },
];
