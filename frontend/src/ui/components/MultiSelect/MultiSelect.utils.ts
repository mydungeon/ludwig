export const toggleOption =
  ({ callback }: { callback: any }) =>
  ({ id }: { id: number }) => {
    callback((prevSelected: number[]) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        return newArray.filter((item) => item !== id);
        // else, add
      } else {
        newArray.push(id);
        return newArray;
      }
    });
  };
