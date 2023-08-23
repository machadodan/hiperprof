import { ProfessorInterface } from "@data/@types/professor";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";


interface ProfessorReducerInterface {
    ProfessorState: ProfessorInterface | undefined;
    ProfessorDispatch: Dispatch<SetStateAction<ProfessorInterface | undefined>>;
}

const initialvalue: ProfessorReducerInterface = {
    ProfessorDispatch: () => {},
    ProfessorState: undefined,
};

export const ProfessorContext = createContext(initialvalue);


export const ProfessorProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const [professor, setProfessor] = useState<ProfessorInterface>();
    return (
      <ProfessorContext.Provider
        value={{ ProfessorState: professor, ProfessorDispatch: setProfessor }}
      >
        {children}
      </ProfessorContext.Provider>
    );
};
