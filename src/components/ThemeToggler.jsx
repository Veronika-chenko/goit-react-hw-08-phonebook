import { FiSun } from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';

export const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right">
      <IconButton
        icon={
          colorMode === 'light' ? <FiSun /> : <BsMoonFill fill="#ffffff9a" />
        }
        _hover={{ boxShadow: '0px 4px 18px -2px #c3d0dd' }}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};
