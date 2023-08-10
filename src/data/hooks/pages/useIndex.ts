import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
    //para navegacao usa userouter do next
    const router = useRouter(),
      [search, setSearch] = useState<string>(""),
      [messageErro, setMessageErro] = useState<string>("");

        function onBuscarProfessor(event: FormEvent) {
            event.preventDefault();
            if(search?.length >= 3) {
                router.push("/pesquisa-professor");
            } else {
                setMessageErro("minimo de três caracteres");
            }
        }

        return {setSearch, messageErro, onBuscarProfessor};
}