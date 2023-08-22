import { ProfessorInterface } from "@data/@types/professor";
import { ApiService } from "./ApiServices";

export const getUser = async () => await ApiService.get<ProfessorInterface>("/api/me",{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token_hiperprof")}`,
    },
}); 