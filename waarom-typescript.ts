let obj: { x?: number; y: string } = { x: 24, y: "hoi" };
delete obj.x;
// obj.x en y nog steeds als suggesties

function doe(p1: string | number, p2: number) {
  if (typeof p1 === "number") {
    // p1.
  }
  // p1

  // p1 is any, geen idee wat je ermee kan.
  // ontdekken wat het is, is meestal een kwestie van UI runnen en functie laten uitvoeren
  // of Ctrl+Shift+F/find all referenties op zoek naar functienaam
}

// refactoren/renamen

let prop = "y"; // rename prop hierboven
console.log(obj.y);
console.log(obj["y"]);
console.log(obj[prop]);

interface Config {
  baseUrl: string;
  nrOfItemsPerPage: number;
  subObj: { x: number };
}

type OptionalConfig = {
  [K in keyof Config]?: Config[K];
};

type OptionalConfig2 = Partial<Config>;

let config: Config = {
  baseUrl: "",
  nrOfItemsPerPage: 4,
  subObj: { x: 9143},
};
