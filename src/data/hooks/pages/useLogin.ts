import { ResponseErroInterface } from "@data/@types/axios_response";
import { LoginErroInterface, LoginInterface, ResponseLoginInterface } from "@data/@types/login";
import { ProfessorContext } from "@data/contexts/ProfessorContext";
import { ApiService } from "@data/services/ApiServices";
import { getUser } from "@data/services/MeService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";

export default function useLogin () {
    const [valuesLogin, setValuesLogin] = useState<LoginInterface>({} as LoginInterface),
    [messageErro, setMessageErro] = useState<LoginErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState(""),
    router = useRouter(),
    {ProfessorDispatch} = useContext(ProfessorContext);

function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(!loading) {
        setLoading(true);
        ApiService.post("/api/auth/login", valuesLogin)
        .then(async ({ data }: AxiosResponse<ResponseLoginInterface>) => {
            localStorage.setItem("token_hiperprof", data.token);
            localStorage.setItem("refresh_token_hiperprof", data.refresh_token);
            await handleGetUser();
            Router.listaDeAlunos.push(router);
        }
        ).catch(({response}: AxiosError<ResponseErroInterface<LoginErroInterface>>) => {
            if (response) {
                const { message, errors } = response.data;

                setMessageErro(errors);
                setSnackMessage(message ?? "");
            }
        }
        //finaliza sempre dando erro ou sucesso
        ).finally(() => {
            setLoading(false);
        });
    }
}

    // funcao para redirecionamento e salvamento usuario ao logar
    async function handleGetUser() {
        await getUser().then(({data}) => {
            ProfessorDispatch(data);
        }).catch(()=>{
            setSnackMessage('Erro inesperado ao tentar buscar usuário logado');
        });
    }

    return { setValuesLogin, messageErro, handleLogin, loading, snackMessage, setSnackMessage, };

}