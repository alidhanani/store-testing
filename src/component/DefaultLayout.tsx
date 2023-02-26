import { AppShell,  } from '@mantine/core';


import Home from '../view/Home';

import AppHeader from './AppHeader';
import Nav from './Nav';

const App = () => {


  return (

      <AppShell
        padding='md'
        header={<AppHeader />}
        navbar={<Nav />}
      >
        <Home />
      </AppShell>
  );
};

export default App;
