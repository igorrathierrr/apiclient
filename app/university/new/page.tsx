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
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar Universidade</h1>
            <form onSubmit={saveUniversity} className="space-y-5">
            <div>
                <label htmlFor="abreviatura" className="block text-sm font-medium mb-1">
                Abreviatura
                </label>
                <input
                type="text"
                placeholder="Abreviatura Universidade"
                id="abreviatura"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Nome
                </label>
                <input
                type="text"
                placeholder="Nome"
                id="nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="endereco" className="block text-sm font-medium mb-1">
                Endereço
                </label>
                <input
                type="text"
                placeholder="Endereço"
                id="endereco"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <Button type="submit" className="w-full">
                Salvar
            </Button>
            </form>
        </div>

    )
}