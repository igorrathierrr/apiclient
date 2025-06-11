export default function TableRowUniversity({university}:any){
    return(
         <tr><td>{university.abreviatura}</td><td>{university.nome}</td><td>{university.endereco}</td>
         <td><a href={`/university/delete?id=${university.id}`}>Deletar</a></td>
         
         </tr>
    )
}