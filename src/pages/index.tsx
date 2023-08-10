import PageTitle from "@components/data-display/PageTitle";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButtons, HomeContainer } from "@styles/pages/index.styles";


export default function Home() {
  return (
    <HomeContainer>
      <PageTitle
        title="ENCONTRE UM PROFESSOR IDEAL PARA VOCÊ!"
        subtitle="Pesquise pelo professor ideal para você"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um professor"}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>,
        }}
        fullWidth
        required
      />
      <BoxButtons>
        <Button 
          type="submit" 
          variant="contained">Buscar por professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  );
}
