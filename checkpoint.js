// function 1 
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
    }
  }
  
  // function 2
  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // function 3 
  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // function 4 
  async function chainedAsyncFunctions() {
    async function logMessage(message) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(message);
    }
  
    await logMessage("First message");
    await logMessage("Second message");
    await logMessage("Third message");
  }
  
  // function 5 
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);
  
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      console.log("Response 1:", data1);
      console.log("Response 2:", data2);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  //function 6 
  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const responseData = await Promise.all(responses.map(response => response.json()));
      console.log("Responses:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
 