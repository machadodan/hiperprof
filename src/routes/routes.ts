import { NextRouter } from "next/router";


// servico de rotas
export const Router = {
  home: {
    name: "/",
    push: function (router: NextRouter) {
      router.push({ pathname: this.name });
    },
    icon: "",
  },
  pesquisaProfessor: {
    name: "/pesquisa-professor",
    push: function (router: NextRouter, search?: string) {
      router.push({ pathname: this.name, query: { search } });
    },
    icon: "",
  },
  cadastroProfessor: {
    name: "/professor/cadastro-professor",
    push: function (router: NextRouter ) {
      router.push({ pathname: this.name });
    },
    icon: "",
  },
};