"use client"

import { Button } from "@/components/ui/button";

export default function NewUniversity() {

    async function saveUniversity(event: React.FormEvent) {
        event.preventDefault(); // Impede o reload da página
        console.log("Enviado")
        const abreviatura = document.getElementById("abreviatura") as HTMLInputElement;
        const nome = document.getElementById("nome") as HTMLInputElement;
        const endereco = document.getElementById("endereco") as HTMLInputElement;

        const university = {
            abreviatura: abreviatura.value,
            nome: nome.value,
            endereco: endereco.value,
        }

        console.log(university)
        try {
            const response = await fetch("https://serverapi-kappa.vercel.app/api/universities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(university)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Cadastrar Univesidade</h1>
            <form onSubmit={saveUniversity}>
                <input type="text" placeholder="Abreviatura Universidade" id="abreviatura" required />
                <input type="text" placeholder="Nome " id="nome" />
                <input type="text" placeholder="Endereço" id="endereco" /> <br />

                <Button type="submit"> Salvar </Button>


            </form>
        </div>

    )
}