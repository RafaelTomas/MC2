import React, { useState } from 'react';
import {
  Box,
  Center,
  Stack,
  List,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import api from '../../services/api';


function Cards({ handleDelete ,children }) {

  
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List>
            {children}
            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'red.500',
                }}
                _focus={{
                  bg: 'red.500',
                }}
                onClick={handleDelete}>
                Deletar
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Editar
              </Button>
            </Stack>
          </List>
        </Box>
      </Box>
    </Center>
  );
}

Cards.propTypes = {
  children: PropTypes.string,
  handleDelete: PropTypes.func,
};

export default Cards;