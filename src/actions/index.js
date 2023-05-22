export const addVacancy=(AddVacancy)=>{
    return{
    type:'ADDVACANCY',
    payload:AddVacancy
    }
}

export const editVacancy=(EditVacancy)=>{
    return{
    type:'EDITVACANCY',
    payload:EditVacancy
}
}

export const deleteVacancy=()=>{
    return{
    type:'DELETEVACANCY'
    }
}
