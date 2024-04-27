import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

interface ProductTileProps {
  title: string;
  price: number;
  onDelete: () => void;
  onEdit: () => void;
}

const ProductTile: React.FC<ProductTileProps> = ({
  title,
  price,
  onDelete,
  onEdit,
}) => {
  return (
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
  );
};

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
export default ProductTile;
