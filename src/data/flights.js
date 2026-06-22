const flights = [
{
    id: 1,
    flightNumber: "SWA102",
    route:"HOU -> DAL",
    boardingStatus: "Boarding",
    ready: true,

    crew: {
        assigned: 4,
        required: 4,
        briefingComplete: true,
    }
},
{
    id: 2,
    flightNumber: "SWA105",
    route: "HOU -> LGA",
    boardingStatus: "Not Started", 
    ready: true,

    crew: {
        assigned: 2,
        required: 4,
        briefingComplete: false,
    }
},
{
    id: 3,
    flightNumber: "SWA310",
    route: "HOU -> PDX",
    boardingStatus: "Delayed", 
    ready: false,

    crew: {
        assigned: 1,
        required: 4,
        briefingComplete: false,
    }
}
]
export default flights