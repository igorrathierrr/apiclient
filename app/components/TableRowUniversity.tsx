export default function TableRowUniversity({university}:any){
    return(
        <tr className="border-b hover:bg-muted">
          <td className="px-4 py-2 font-medium">{university.abreviatura}</td>
          <td className="px-4 py-2">{university.nome}</td>
          <td className="px-4 py-2">{university.endereco}</td>
          <td className="px-4 py-2">
            <a
              href={`/university/delete?id=${university.id}`}
              className="text-destructive hover:underline"
            >
              Deletar
            </a>
          </td>
        </tr>
    )
}