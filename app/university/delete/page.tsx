"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams,useRouter } from "next/navigation";


export default function DeleteUniversity() {
    const id = useSearchParams().get("id");
    const router = useRouter();

    async function handleDelete() {
        console.log("Universidade deletada");
        try {
            const responde = await fetch(`https://serverapi-kappa.vercel.app/api/universities/${id}`, {
                method: "DELETE",
            })
            router.push("/university");
        } catch (error) {
            console.error("Erro ao deletar a universidade:", error);
        }
    }
        return (
            <div>
                <h1>Deletar Universidade</h1>
                <Button variant="destructive" onClick={handleDelete}>Deletar</Button>
            </div>
        )
    }