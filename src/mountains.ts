export interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [{
    name: "Kilimanjaro",
    height: 19341,
    },
    {
    name: "Everest",
    height: 29029,
    },
    {
    name: "Denali",
    height: 20310,
    }
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestHeight = 0;
    let tallestName = "";
    mountains.forEach(mountain => {
        if (mountain.height > tallestHeight) {
            tallestHeight = mountain.height;
            tallestName = mountain.name;
        }
    });
    return tallestName;
};

const tallestMountain = findNameOfTallestMountain(mountains);

console.log(tallestMountain);