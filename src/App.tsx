import {FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import {styles} from './styles';
import {Provider} from 'react-redux';
import store from './store';
import {setIsDislikeAll, setIsLikeAll, setIsResetAll} from './store/product';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          contentContainerStyle={styles.container}
          data={store.getState().productReducer.products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item} />}
          ListHeaderComponent={
            <View style={styles.header}>
              <Button
                title="Like All"
                type="primary"
                onPress={() => store.dispatch(setIsLikeAll(true))}
              />
              <Button
                title="Reset All"
                onPress={() => store.dispatch(setIsResetAll(true))}
              />
              <Button
                title="Dislike All"
                type="error"
                onPress={() => store.dispatch(setIsDislikeAll(true))}
              />
            </View>
          }
        />
      </SafeAreaView>
    </Provider>
  );
}
