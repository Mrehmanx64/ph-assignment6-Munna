
async function testFetch() {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    console.log("Data length:", data.length);
    console.log("First item:", JSON.stringify(data[0], null, 2));
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
testFetch();
