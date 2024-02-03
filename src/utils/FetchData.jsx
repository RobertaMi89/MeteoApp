const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
export default fetchData;
