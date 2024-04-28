import React, {useState} from 'react';
import {Button, Switch, Text, TextInput, View, FlatList} from 'react-native';
// import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import {IconButton} from 'react-native-paper';
import ProductModel from '../models/ProductModel';
import styles from '../styles/AppStyle';
import ProductTile from '../components/ProductTile';

const TaskScreen: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedPickerItem, setSelectedPickerItem] = useState<string>();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const years = Array(76)
    .fill(null)
    .map((_, index) => index + 2024);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [productList, setProductList] = useState<ProductModel[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const isDisabled = () => title === '' || price === '';

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  const totalPrice = () => {
    var sum: number = 0;
    productList.forEach((product: ProductModel) => (sum += product.price));
    return sum;
  };

  const handleAddExpense = () => {
    if (!isDisabled()) {
      if (editingIndex !== null) {
        // If editingIndex is not null, it means an item is being edited
        const updatedProductList = [...productList];
        updatedProductList[editingIndex] = {title, price: Number(price)};
        setProductList(updatedProductList);
        setTitle('');
        setPrice('');
        setEditingIndex(null); // Reset editingIndex after editing
      } else {
        // If editingIndex is null, it means a new item is being added
        const product: ProductModel = {title, price: Number(price)};
        setProductList([...productList, product]);
        setTitle('');
        setPrice('');
      }
    }
  };

  const handleDelete = (index: number) => {
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
  };

  const handleEdit = (index: number) => {
    setTitle(productList[index].title);
    setPrice(productList[index].price.toString());
    setEditingIndex(index);
  };
  return (
    <View style={[toggle ? styles.darkMode : styles.lightMode, styles.app]}>
      <Text
        style={[toggle ? styles.darkMode : styles.lightMode, styles.appBar]}>
        Expenses Log
      </Text>
      <View style={styles.toggle}>
        <Text style={toggle ? styles.darkMode : styles.lightMode}>
          Toggle Theme
        </Text>
        <Switch
          style={styles.toggle}
          trackColor={{true: 'darkgreen', false: 'darkgreen'}}
          onValueChange={toggleSwitch}
          value={toggle}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Picker
          style={[styles.picker]}
          dropdownIconColor={'white'}
          selectedValue={selectedPickerItem}
          onValueChange={itemValue => setSelectedPickerItem(itemValue)}>
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={month} />
          ))}
        </Picker>
        <Picker
          style={[styles.picker]}
          dropdownIconColor={'white'}
          selectedValue={selectedPickerItem}
          onValueChange={itemValue => setSelectedPickerItem(itemValue)}>
          {years.map((year, index) => (
            <Picker.Item key={index} label={`${year}`} value={year} />
          ))}
        </Picker>
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TextInput
          style={[
            styles.textInput,
            toggle ? styles.darkMode : styles.lightMode,
            {flex: 1},
          ]}
          placeholder="Enter title"
          placeholderTextColor={'grey'}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[
            styles.textInput,
            toggle ? styles.darkMode : styles.lightMode,
          ]}
          placeholder="Enter price"
          placeholderTextColor={'grey'}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
      </View>
      <Button
        title="ADD EXPENSE"
        onPress={handleAddExpense}
        disabled={isDisabled()}
      />
      {productList.length > 0 ? (
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.expenses,
              {flex: 1},
              toggle ? styles.darkMode : styles.lightMode,
            ]}>
            Total Expense
          </Text>
          <Text
            style={[
              styles.expenses,
              toggle ? styles.darkMode : styles.lightMode,
            ]}>{`$ ${totalPrice()}`}</Text>
        </View>
      ) : (
        <Text
          style={[
            styles.expenses,
            {textAlign: 'center'},
            toggle ? styles.darkMode : styles.lightMode,
          ]}>
          No expenses added yet.
        </Text>
      )}

      <View style={{flex: 1}}>
        <FlatList
          data={productList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ProductTile
              title={`${index + 1}: ${item.title}`}
              price={item.price}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
              isDark={toggle}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TaskScreen;
