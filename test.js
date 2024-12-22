const jsonData1 = {
  relationships_following: [
    {
      string_list_data: [{ value: "A" }, { value: "B" }],
    },
  ],
};

const jsonData2 = [
  {
    string_list_data: [{ value: "B" }, { value: "C" }],
  },
];


const data1 = jsonData1.relationships_following.flatMap(item => item.string_list_data).map(data => data.value)
const data1map = jsonData1.relationships_following.flatMap(item => item.string_list_data)
const data2 = jsonData2.flatMap(item => item.string_list_data).map(data => data.value);

const missing = data1.filter(data => !data2.includes(data))
    // const missing = data2.filter((value) => !data1.includes(value));


console.log(data1);
console.log(data1map);
console.log(data2);

console.log(missing);