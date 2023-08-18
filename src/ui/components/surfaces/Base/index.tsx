import Link from "@components/navigation/Link";
import { AppBar, Box, Container, Drawer, Icon, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import { BoxDrawer, ButtonStyle } from "./styles";


function LinkLogo() {
    return (
        <Link href="/">
            <img src="/logo.png" alt="hiper prof" />
        </Link>

    )
}

export default function Base({ children }: PropsWithChildren) {
    //para mobile
    const {
        breakpoints, 
        palette: {common },
    } = useTheme(),
     isSmDevice = useMediaQuery(breakpoints.up("sm")),
     [isOpenDrawer, setIsOpenDrawer] = useState(false),
     router = useRouter();


     function onSejaProfessor() {
        Router.cadastroProfessor.push(router);
     }
     return (
       <Box
         sx={{
           bgcolor: common.white,
           height: "100%",
           minHeight: "100vh",
           width: "100%",
         }}
       >
         <AppBar position="static">
           <Toolbar component={Container}>
             {isSmDevice ? (
               <Box
                 sx={{
                   display: "flex",
                   justifyContent: "space-between",
                   alignItems: "center",
                   width: "100%",
                 }}
               >
                 <LinkLogo />
                 <Box sx={{ display: "flex", alignItems: "center" }}>
                   <Link href="/" color={"inherit"}>
                     HOME
                   </Link>
                   <Link href="/login" color={"inherit"} sx={{ ml: 5, mr: 5 }}>
                     LOGIN
                   </Link>
                   <ButtonStyle variant="outlined" onClick={onSejaProfessor}>
                     SEJA UM PROFESSOR
                   </ButtonStyle>
                 </Box>
               </Box>
             ) : (
               <>
                 <IconButton
                   color={"inherit"}
                   sx={{ mr: 2 }}
                   onClick={() => setIsOpenDrawer(true)}
                 >
                   <Icon>menu</Icon>
                 </IconButton>
                 <Drawer
                   open={isOpenDrawer}
                   onClick={() => setIsOpenDrawer(false)}
                   onClose={() => setIsOpenDrawer(false)}
                 >
                   <BoxDrawer>
                     <div className="linkImage">
                       <LinkLogo />
                     </div>
                     <Box
                       sx={{
                         display: "flex",
                         flexDirection: "column",
                         ml: 3,
                         mr: 5,
                       }}
                     >
                       <Link href="/">HOME</Link>
                       <Link href="/login" sx={{ my: 3 }}>
                         LOGIN
                       </Link>
                       <Link href="/professor/cadastro-professor">
                         SEJA UM PROFESSOR
                       </Link>
                     </Box>
                   </BoxDrawer>
                 </Drawer>
                 <LinkLogo />
               </>
             )}
           </Toolbar>
         </AppBar>
         <Container component={"main"}>{children}</Container>
       </Box>
     );    
}