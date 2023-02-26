import {  ActionIcon, Button, Group, Header, Title, Text, Anchor, Space } from '@mantine/core';
import React from 'react';

import { useStyle } from './AppHeader.style';
import { IconNetwork, IconUser, IconSearch, IconShoppingBag } from '@tabler/icons';

const AppHeader = () => {
  const { classes } = useStyle();
  return (
    <Header className={classes.header} fixed={true} height={70} p='xs'>
      <Group position='center'>
        <Group
          sx={{
            height: '100%',
            width: '99%',
          }}
          px={20}
          position='apart'
        >
    <Button.Group>
      <Anchor style={{color: 'white', paddingLeft: '20px'}} href="https://mantine.dev/" target="_blank"><Text fz="sm" tt="uppercase" style={{fontWeight: 'bold'}} >{'Women'}</Text></Anchor>
      <Anchor style={{color: 'white', paddingLeft: '20px'}} href="https://mantine.dev/" target="_blank"><Text fz="sm" tt="uppercase" style={{fontWeight: 'bold'}} >{'Men'}</Text></Anchor>
    </Button.Group>
          <Group position='left'>
            <Title className={classes.title} align='center' order={3}>
              {'SARAH PACINI'}
            </Title>
          </Group>
    <Button.Group>
          <ActionIcon size="lg">
            <IconNetwork size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconUser size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconSearch size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconShoppingBag size={24} stroke={1.5} />
          </ActionIcon>
    </Button.Group>
        </Group>
      </Group>
    </Header>
  );
};

export default React.memo(AppHeader);
