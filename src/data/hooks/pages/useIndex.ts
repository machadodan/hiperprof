import { getUser } from "@data/services/MeService";
import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

export default function useIndex() {
    //para navegacao usa userouter do next
    const router = useRouter(),
      [search, setSearch] = useState<string>(""),
      [messageErro, setMessageErro] = useState<string>("");

        function onBuscarProfessor(event: FormEvent) {
            event.preventDefault();
            if(search?.length >= 3) {
                Router.pesquisaProfessor.push(router, search);
            } else {
                setMessageErro("minimo de três caracteres");
            }
        }

        //effect para saber se usuario ta logado
        useEffect(() => {
            getUser().then(() => Router.listaDeAlunos.push(router));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);       

        return {setSearch, messageErro, onBuscarProfessor};
}