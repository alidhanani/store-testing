import { Navbar, ScrollArea, createStyles, Text, Anchor } from '@mantine/core';

const mockdataFirst = [
  {
    label: 'New Collection',
  },
  {
    label: 'Ungendered',
  },
];

const mockdataDim = [
    {
      label: 'Sweaters',
    },
    {
      label: 'Cardigans',
    },
    {
       label: 'Ponchos',
    },
    {
       label: 'Scarves',
    },
    {
        label: 'Dickey',
    },
    {
        label: 'Hoodies',
    },
  ];

  const mockdataFooter = [
    {
      label: 'Accessories',
    },
    {
      label: 'Highlights',
    },
    {
       label: 'Final Reductions',
    },
  ];

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingBottom: 0,
    marginLeft: '20px'
  },
  links: {
    paddingTop: '50%',
    marginLeft: '10px',
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.md,
  },

  linksSub: {
    paddingBottom: theme.spacing.md,
  },

}));

 const Nav = () =>  {
  const { classes } = useStyles();
  const links = mockdataFirst.map((item) => <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="sm" tt="uppercase" style={{fontWeight: 'bold'}} >{item.label}</Text></Anchor>);
  const links1 = mockdataDim.map((item) => <Anchor style={{color: 'grey'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase">{item.label}</Text></Anchor>);
  const links2 = mockdataFooter.map((item) => <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="sm" tt="uppercase" style={{fontWeight: 'bold'}}>{item.label}</Text></Anchor>);

  return (
    <Navbar withBorder={false} height={800} width={{ sm: 200 }} p="md" className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
        <div className={classes.linksSub}>{links1}</div>
        <div className={classes.linksInner}>{links2}</div>
      </Navbar.Section>
    </Navbar>
  );
}

export default Nav