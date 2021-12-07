import React, {useState} from 'react';
import {Box, Text, Heading, Pressable, Input, HStack} from 'native-base';

import NextIcon from '../../assets/images/svg/arrow-right-circle.svg';
import PrevIcon from '../../assets/images/svg/arrow-left-circle.svg';

const PageController = ({
  page,
  perPage,
  onChangePerPage,
  onNext,
  onPrev,
  disableNextPageBtn,
}) => {
  return (
    <Box w="100%" py={3} px="5%">
      <HStack
        w="100%"
        space={10}
        alignItems="center"
        justifyContent="space-around">
        <HStack
          flex={1}
          space={3}
          alignItems="center"
          justifyContent="space-between">
          <Pressable
            onPress={() => {
              onPrev();
            }}
            disabled={page === 0 ? true : false}>
            <PrevIcon size={20} width={20} color="#333" />
          </Pressable>
          <Heading size="sm" color="gray.500">
            {Number(page) + 1}
          </Heading>
          <Pressable
            disable={true}
            onPress={() => {
              onNext();
            }}
            disabled={disableNextPageBtn}>
            <NextIcon size={20} width={20} color="#333" />
          </Pressable>
        </HStack>
        <HStack flex={2} alignItems="center">
          <Heading color="gray.500" size="sm">
            Count per Page :{' '}
          </Heading>
          <Input
            type="number"
            keyboardType="number-pad"
            value={String(perPage)}
            py={0}
            borderColor="amber.500"
            onChangeText={text => {
              onChangePerPage(text);
            }}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default PageController;
