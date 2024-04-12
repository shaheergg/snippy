// const BASE_URL = "https://emkc.org";

// var hackerEarth = require("hackerearth-node"); //require the Library
// //Now set your application
// var hackerEarth = new hackerEarth(
//   "12d35f140b06e9dc075d3e52aa980b75c289ec53", //Your Client Secret Key here this is mandatory
//   "" //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
// );
// var config = {
//   time_limit: 1, //your time limit in integer
//   memory_limit: 323244, //your memory limit in integer
//   source: `print("hello, world")`, //your source code for which you want to use hackerEarth api
//   input: "", //input against which you have to test your source code
//   language: "Py", //optional choose any one of them or none
// };

// const exectureCode1 = async () => {
//   try {
//     // const compiled = await hackerEarth.compile(config);
//     const response = await hackerEarth.run(config);
//     return response;
//   } catch (error) {
//     console.error("Failed to fetch data from hackerearth", error);
//     throw new Error("Failed to fetch data from hackerearth", error);
//   }
// };

// const executeCode = async () => {
//   try {
//     const module = await import("node-fetch");
//     const fetch = module.default;

//     const response = await fetch(`${BASE_URL}/api/v2/piston/execute`, {
//       method: "POST",
//       body: JSON.stringify({
//         language: "python",
//         source: "print('Hello, World!')",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch data from emkc.org", error);
//     throw new Error("Failed to fetch data from emkc.org", error);
//   }
// };

// export const execute = async (req, res) => {
//   try {
//     const data = await exectureCode1();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
