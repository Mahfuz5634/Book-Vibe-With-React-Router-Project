const getStorebook = () => {
  const storeBook = localStorage.getItem("readlist");

  if (storeBook) {
    const storebookdata = JSON.parse(storeBook);
    return storebookdata;
  } else {
    return [];
  }
};

const addTostore = (id) => {
  const storebookdata = getStorebook();
  if (storebookdata.includes(id)) {
    alert("Data Alrady Exist..");
  }
  else{
    storebookdata.push(id);
    localStorage.setItem('readlist',JSON.stringify(storebookdata));
    console.log(storebookdata);
  }
};

export {addTostore};
