import Recat from "react";
export default function PrimitivePropsDestracturing_Function(props){
    const {id,title,description,priority}=props
    return(
        <div>
            <h2>Primitive Props Destracturing--Functional Component</h2>
            <p>id-{id}</p>
            <p>title-{title}</p>
            <p>description-{description}</p>
            <p>priority-{priority}</p>
        </div>
    )
}


// import Recat from "react";
// export default function PrimitivePropsDestracturing_Function({id,title,description,priority}){
//     // const {id,title,description,priority}=props
//     return(
//         <div>
//             <h2>Primitive Props Destracturing--Functional Component</h2>
//             <p>id-{id}</p>
//             <p>title-{title}</p>
//             <p>description-{description}</p>
//             <p>priority-{priority}</p>
//         </div>
//     )
// }