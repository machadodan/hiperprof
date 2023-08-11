import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxCardStyled, BoxContainsStyled, ImageStyled } from "./style";

export default function ProfessorCard() {

    return (
      <BoxCardStyled>
        <BoxAvatarStyled>
          <ImageStyled src="https://github.com/machadodan.png" alt="" />
        </BoxAvatarStyled>
        <BoxContainsStyled>
          <div className="text-container">
            <Typography variant="h6" className="descricao" paragraph>
              Nome
            </Typography>

            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              className="descricao"
              variant="body2"
              paragraph
            >
              Descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum neque dignissimos aperiam, repudiandae corrupti harum sit consequuntur id possimus consectetur ipsa autem amet, vel ducimus nostrum debitis? Delectus, laboriosam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae tenetur autem repellendus sunt sit, nihil deserunt aperiam officia praesentium modi vitae voluptate repudiandae harum delectus! Nemo provident quasi dolore illo?
            </Typography>
          </div>
          <Button variant="outlined"
            color="inherit"
            onClick={() => {}}
          >Ver detalhes</Button>
        </BoxContainsStyled>
      </BoxCardStyled>
    );
}