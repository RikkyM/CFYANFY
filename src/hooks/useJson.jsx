import { useEffect, useState } from "react";

export const useJson = () => {
  const [jsonData1, setJsonData1] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (filenumber) => (e) => {
    const file = e.target.files[0];
    const setJsonData = filenumber === 1 ? setJsonData1 : setJsonData2;

    if (!file) return;

    if (file.type !== "application/json") {
      setError("Please select a JSON file");
      setHasil(null);
      setSearch("");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setJsonData(content);
        setHasil(null);
        setSearch("");
        setError("");
      } catch (err) {
        setError("Error parsing JSON file", err);
      }
    };

    reader.onerror = () => {
      setError("Error reading file");
      setHasil(null);
    };

    reader.readAsText(file);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = hasil?.compare.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (jsonData1 && jsonData2) {
      try {
        const data1 = jsonData1.relationships_following
          .flatMap((item) => item.string_list_data)
          .map((item) => item.value);

        const data2 = jsonData2
          .flatMap((item) => item.string_list_data)
          .map((item) => item.value);

        const compare = data1.filter((item) => !data2.includes(item));

        setHasil({ compare });
      } catch (e) {
        setError("File tidak valid", e);
      }
    }
  }, [jsonData1, jsonData2]);

  return {
    hasil,
    error,
    handleFileChange,
    handleSearchChange,
    filterSearch,
  };
};
