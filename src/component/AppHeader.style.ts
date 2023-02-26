import { createStyles } from '@mantine/core';

export const useStyle = createStyles(() => {
  return {
    textCenter: { textAlign: 'center' },
    header: {
      backgroundColor: 'black'
    },
    title: { paddingTop: '10px', color: 'white' },
  };
});
