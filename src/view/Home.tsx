import { Anchor, AspectRatio, Image, Card, Container, Flex, SimpleGrid,  Text, createStyles, Group, Divider} from "@mantine/core";

  const imagedata = [
    {
      date: 'Ligth Sweater - Mocke Neck',
      image:
        '	https://cdn.sarahpacini.com/overview_new/22211135M_02/A.jpg',
      title: '15 euro',
    },
    {
      date: 'Ligth Sweater - Mocke Neck',
      image:
        '	https://cdn.sarahpacini.com/overview_new/22211135M_02/A.jpg',
      title: '15 euro',
    },
    {
      date: 'Ligth Sweater - Mocke Neck',
      image:
        '	https://cdn.sarahpacini.com/overview_new/22211135M_02/A.jpg',
      title: '15 euro',
    },
    {
      date: 'Ligth Sweater - Mocke Neck',
      image:
        '	https://cdn.sarahpacini.com/overview_new/22211135M_02/A.jpg',
      title: '15 euro',
    },
  ];


  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 14,
      fontWeight: 600,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 14,
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  }));

function Home() {
    const { classes } = useStyles();
      const cards = imagedata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
          <AspectRatio ratio={800 / 1080}>
            <Image src={article.image} />
          </AspectRatio>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
            {article.date}
          </Text>
          <Text className={classes.title} mt={5}>
            {article.title}
          </Text>
        </Card>
      ));
  return (
    <>    
        <Flex
            mih={50}
            gap="md"
            justify="center"
            align="flex-start"
            direction="row"
            wrap="wrap"
            style={{paddingRight: '150px'}}
            >
                <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'New Collection'}</Text></Anchor>
                <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'Ungendered'}</Text></Anchor>
                <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'Highlights'}</Text></Anchor>
                <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'about us'}</Text></Anchor>
                <Anchor style={{color: 'black'}} href="https://mantine.dev/" target="_blank"><Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'final reductions'}</Text></Anchor>
        </Flex>
        <Container size="lg" py="xs" fluid>
        <Group position="apart" style={{width: '98%', paddingLeft: '15px'}}>
          <Group position="left">
            <Text fz="xs" tt="uppercase" style={{fontWeight: 'bold'}} >{'Ungendered'}</Text>
            <Divider size="sm" orientation="vertical" />
            <Text fz="xs" tt="uppercase" style={{color: 'grey'}} >{'60 Items'}</Text>
          </Group>
          <Group position="left">
            <Text fz="xs" tt="uppercase" style={{color: 'grey'}} >{'Filter By size'}</Text>
            <Text fz="xs" tt="uppercase" style={{color: 'grey'}} >{'color'}</Text>
          </Group>
        </Group>
            <SimpleGrid cols={3} spacing="xs" mt={50}>
                {cards}
                {cards}
                {cards}
            </SimpleGrid>
        </Container>
    </>
  );
}

export default Home;
