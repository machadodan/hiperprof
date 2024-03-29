import UserProfileAvatar from "@components/data-display/UserProfileAvatar";
import { RouterTypeKeyof } from "@data/@types/router";
import { ProfessorContext } from "@data/contexts/ProfessorContext";
import { Icon, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import React, { useContext, useMemo, useRef } from "react";
import { UserHeaderMenuContainer, UserMenu } from "./styles";

interface UserHeaderMenuProps {
  isMenuOpen?: boolean;
  onClick?: () => void;  
  onMenuClick: (event: React.MouseEvent) => void;
  onMenuClose: (event: React.MouseEvent) => void;
  handleLogout?: () => void;
}


export default function UserHeaderMenu({
  isMenuOpen = false,
  onClick,
  onMenuClick,
  onMenuClose,
  handleLogout,

}: UserHeaderMenuProps) {
  const _router = useRouter(),
    { ProfessorState: professor } = useContext(ProfessorContext),
    containerRef = useRef(null),
    listMenu = useMemo(() => {
      return handleMenuRouter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [professor]);

    function handleMenuRouter() {      
      //pegando o nome da rota de object keys
      return Object.keys(Router).map((value) => {
        const _value = value as RouterTypeKeyof;
        return {
          nome: value.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase(),
          router: Router[_value],
        };
      }).filter(({ router }) => {
        return router.icon;
      });
    }
  return (
    <UserHeaderMenuContainer ref={containerRef}>
      <UserProfileAvatar professor={professor} onClick={onClick} />
      <UserMenu
        open={isMenuOpen}
        anchorEl={containerRef.current}
        onClose={onMenuClose}
        onClick={onMenuClick}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >

        {listMenu.map(({nome, router}) => {
          return (

        <ListItem 
          key={nome} 
          onClick={() => {
          router.push(_router);
        }}>
          <ListItemButton>
            <ListItemIcon>
              <Icon>{router.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={nome} />
          </ListItemButton>
        </ListItem>
          );
        })}
        <ListItem onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon>
             <Icon>Logout</Icon>
            </ListItemIcon>
            <ListItemText primary={"logout"} />           
          </ListItemButton>
        </ListItem>
      </UserMenu>
    </UserHeaderMenuContainer>
  );
}