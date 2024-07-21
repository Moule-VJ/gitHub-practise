const ab = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
