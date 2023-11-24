import {Image, TouchableOpacity, View} from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import Button from '../Button';
import Gap from '../Gap';
import {CardInterface} from '../../utils/interfaces';
import {styles} from './styles';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '../../store';
import {
  setIsDislikeAll,
  setIsLikeAll,
  setIsResetAll,
} from '../../store/product';

const Card = ({item}: CardInterface) => {
  const dispatch = useDispatch<RootDispatch>();
  const {isLikeAll, isDislikeAll, isResetAll} = useSelector(
    (state: RootState) => state.productReducer,
  );
  const [like, setLike] = useState<number>(item.like);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (isLikeAll) {
      setLike(value => value + 1);
      dispatch(setIsLikeAll(false));
    }
    if (isDislikeAll) {
      like > 0 && setLike(value => value - 1);
      dispatch(setIsDislikeAll(false));
    }
    if (isResetAll) {
      like > 0 && setLike(0);
      dispatch(setIsResetAll(false));
    }
  }, [isLikeAll, isDislikeAll, isResetAll]); // eslint-disable-line react-hooks/exhaustive-deps

  const onLike = () => setLike(value => value + 1);
  const onDislike = () => like > 0 && setLike(value => value - 1);

  console.log('test');

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setShowModal(true)}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Button disabled={true} title={`${like} Likes`} />
        <Gap flex={1} />
        <Button title="Like" type="primary" onPress={onLike} />
        <Gap width={10} />
        <Button title="Dislike" type="error" onPress={onDislike} />
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.content}>
            <Button disabled={true} title={`${like} Likes`} />
            <Gap flex={1} />
            <Button title="Like" type="primary" onPress={onLike} />
            <Gap width={10} />
            <Button title="Dislike" type="error" onPress={onDislike} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(Card);
