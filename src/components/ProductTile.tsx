import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from '../styles/AppStyle';

interface ProductTileProps {
  title: string;
  price: number;
  isDark: boolean;
  onDelete: () => void;
  onEdit: () => void;
}

const ProductTile: React.FC<ProductTileProps> = ({
  title,
  price,
  onDelete,
  onEdit,
  isDark,
  //   style, // Corrected prop name from "style" to "style"
}) => {
  return (
    <View>
      <View style={style.tileStyle}>
        <Text style={{flex: 1}}>{title}</Text>
        <Text>{`$ ${price}`}</Text>
        <IconButton
          icon={require('../assets/icons/trash.png')}
          iconColor="white"
          size={20}
          onPress={onDelete}
        />
        <IconButton
          icon={require('../assets/icons/pencil.png')}
          iconColor="white"
          size={20}
          onPress={onEdit}
        />
      </View>
      <Text
        style={[
          isDark ? styles.darkMode : styles.lightMode,
          {textAlign: 'right', marginRight: 10},
        ]}>
        {new Date().toDateString()}
      </Text>
    </View>
  );
};

export default ProductTile;

const style = StyleSheet.create({
  tileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
});
