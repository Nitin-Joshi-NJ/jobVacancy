let initialState = [
  {
    id: "1",
    JobTitle: "Frontend Developer",
    CompanyName: "Company Name",
    Salary: "Salary: 20k-30k/m ",
    Joining: "1/10/22 9:21 pm",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    JobTitle: "Frontend Developer1",
    CompanyName: "Company Name",
    Salary: "Salary: 20k-30k/m  ",
    Joining: "1/10/22 9:21 pm",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  },
  {
    id: "3",
    JobTitle: "Frontend Developer",
    CompanyName: "Company Name",
    Salary: "Salary: 20k-30k/m ",
    Joining: "1/10/22 9:21 pm",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  },
];

const changeInVacancy=(state=initialState,action)=>{
    switch(action.type){
        case 'ADDVACANCY' : return [...state,action.payload] 
        case 'EDITVACANCY' : return [...state,action.payload] 
        case 'DELETEVACANCY' : return state-1
        default : return state
    }
}

export default changeInVacancy;