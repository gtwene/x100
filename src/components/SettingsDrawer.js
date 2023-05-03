import { useState, useEffect, useRef } from 'react';
import { Drawer, Button, Group, useMantineTheme, Radio, Menu } from '@mantine/core';
import { MDBIcon, MDBRadio } from 'mdb-react-ui-kit';
import { formLabelClasses } from '@mui/material';

export default function SettingsDrawer({ open, setOpened, setLayoutType}) {

  // const theme = useMantineTheme();

  const [isOpened, setIsOpened] = useState(false);

  useEffect(()  => {

      setIsOpened(open);

      return () => {
        // console.log('Component unmounted');
        // setIsOpened();
      };

  }, [open]); 

  function closeFunc(){
    setOpened(false);
  }

  function defaultLayoutFunc(){
    setLayoutType(0);
    closeFunc();
  }

  function modernLayoutFunc(){
    setLayoutType(1);
    closeFunc();
  }

  function stylishLayoutFunc(){
    setLayoutType(2);
    closeFunc();
  }

  return (
    <>
      <Drawer
        opened={isOpened}
        onClose={() => closeFunc() }
        title="App Settings"
        position="right"
        // overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        padding="xl"
        size="sm"
      >
        {/* Drawer content */}

        <hr />

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Screen Layouts</p>

        <hr />

        {(() => {
          if(JSON.parse(localStorage.getItem("layoutType")) === 0){
              // Default Layout
            return (<MDBRadio name='flexRadioDefault1' onClick={() => defaultLayoutFunc()} id='flexRadioDefault1' label='Default Layout' defaultChecked />);
          } else {
            return (<MDBRadio name='flexRadioDefault1' onClick={() => defaultLayoutFunc()} id='flexRadioDefault1' label='Default Layout' />);
          }
        })()}

        <hr style={{ visibility: "hidden", marginBottom: "-4px" }} />

        {(() => {
          if(JSON.parse(localStorage.getItem("layoutType")) === 1){
              // Modern Layout
            return (<MDBRadio name='flexRadioDefault2' onClick={() => modernLayoutFunc()} id='flexRadioDefault2' label='Modern Layout' defaultChecked />);
          } else {
            return (<MDBRadio name='flexRadioDefault2' onClick={() => modernLayoutFunc()} id='flexRadioDefault2' label='Modern Layout' />);
          }
        })()}

        <hr style={{ visibility: "hidden", marginBottom: "-4px" }} />

        {(() => {
          if(JSON.parse(localStorage.getItem("layoutType")) === 2){
              // Stylish Layout
            return (<MDBRadio name='flexRadioDefault3' onClick={() => stylishLayoutFunc()} id='flexRadioDefault3' label='Stylish Layout' defaultChecked />);
          } else {
            return (<MDBRadio name='flexRadioDefault3' onClick={() => stylishLayoutFunc()} id='flexRadioDefault3' label='Stylish Layout' />);
          }
        })()}

        <hr />

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Translations</p>

        <hr />

        <MDBRadio name='flexRadioDefault' id='flexRadioDefault4' label='English Translation' defaultChecked />
        <hr style={{ visibility: "hidden", marginBottom: "-4px" }} />
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault5' label='French Translation' />
        <hr style={{ visibility: "hidden", marginBottom: "-4px" }} />
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault6' label='Spanish Translation' />
        <hr style={{ visibility: "hidden", marginBottom: "-4px" }} />
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault7' label='Krio Translation' />

      </Drawer>
    </>
  );
}