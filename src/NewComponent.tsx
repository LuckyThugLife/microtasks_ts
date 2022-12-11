import React from 'react';


export type NewComponentPropsType = {
    // students:Array<StudentType>
    // students:StudentType[]
    topCars: topCarsType[]

}

/*type StudentType={
  id: number,
  name: string,
  age:number

}*/
export type topCarsType = {
    manufacturer: string,
    model: string,

}


 export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export function NewComponent(props: NewComponentPropsType) {

    return (
        <tr>
            {props.topCars.map((ObjectFromTopCarsArray, index) => {
                return (
                    <tr key={ObjectFromTopCarsArray.manufacturer}>
                        <span>{ObjectFromTopCarsArray.model}</span>


                    </tr>
                )

            })}
        </tr>
        /* <ul>
           {props.students.map((ObjectFromStudentArray, index)=>{
             return(
                 <li key={ObjectFromStudentArray.id}>
                     <span>{ObjectFromStudentArray.name}</span>
                     <span> age :{ObjectFromStudentArray.age}</span>

                 </li>
             )

           })}

         </ul>*/

    );
}

export default NewComponent;
