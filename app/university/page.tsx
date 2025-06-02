import TableRowUniversity from "../components/TableRowUniversity";

export default async function University(){
   
    const request = await fetch("https://serverapi-kappa.vercel.app/api/universities")
    const listUniversity = await request.json();

    const universities = [];
    for (const university of listUniversity){
        universities.push(<TableRowUniversity key={university.id} university={university} />)
    }

    return (
        <div>
            <h1>Lista de Universidades</h1>
            <table>
                <tbody> 
                    {universities}
                </tbody>
            
            </table>
            
        </div>
    )
}