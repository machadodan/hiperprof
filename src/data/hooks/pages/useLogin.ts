import { ResponseErroInterface } from "@data/@types/axios_response";
import { LoginErroInterface, LoginInterface, ResponseLoginInterface } from "@data/@types/login";
import { ApiService } from "@data/services/ApiServices";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useLogin () {
    const [valuesLogin, setValuesLogin] = useState<LoginInterface>({} as LoginInterface),
    [messageErro, setMessageErro] = useState<LoginErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState(""),
    router = useRouter();

function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(!loading) {
        setLoading(true);
        ApiService.post("/api/auth/login", valuesLogin).then(({ data }: AxiosResponse<ResponseLoginInterface>) => {
            localStorage.setItem("token_hiperprof", data.token);
            localStorage.setItem("refresh_token_hiperprof", data.refresh_token);
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

    return { setValuesLogin, messageErro, handleLogin, loading, snackMessage, setSnackMessage, };

}