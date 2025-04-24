d3.csv("../data/tvbrandcount.csv", d => ({
    screenTech: d["Screen_Tech"],
    energy: +d["Labelled energy consumption (kWh/year)"]
  })).then(data => {
    console.log("Loaded data:", data);
    console.log("Number of entries:", data.length);
    console.log("Max energy:", d3.max(data, d => d.energy));
    console.log("Min energy:", d3.min(data, d => d.energy));
  });