import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  AlertDialog,
  ArrowBackIcon,
  Button,
  HStack,
  Heading,
  Box,
  Pressable,
} from 'native-base';

import {logout} from '../redux/actions/authAction';
import LogoutIcon from '../../assets/images/svg/logout.svg';

const Header = ({hasBackButton, title, headerBackgroundColor}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {authenticated} = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <Box w="100%" bg={headerBackgroundColor} px="5%" py={3}>
      <HStack space={3} alignItems="center">
        {hasBackButton && (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowBackIcon size={6} color="white" />
          </Pressable>
        )}
        <Heading size="md" color="white">
          {title}
        </Heading>

        <AlertDialog isOpen={open} onClose={onClose} motionPreset={'fade'}>
          <AlertDialog.Content>
            <AlertDialog.Header fontSize="lg" fontWeight="bold">
              Notification
            </AlertDialog.Header>
            <AlertDialog.Body>
              Are you sure? Do you want to logout ?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button variant="ghost" onPress={onClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                onPress={() => {
                  onClose();
                  setTimeout(() => {
                    dispatch(logout());
                  }, 1000);
                }}
                ml={3}>
                Ok
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </HStack>
    </Box>
  );
};

export default Header;
