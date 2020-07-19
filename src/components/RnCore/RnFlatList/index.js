import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ActivityIndicator, Button } from "react-native";
import { getData } from "./../apiTest/data";
import { Styles, Colors } from "./../../../static/Theme";

const INITIAL_DATA = {
  data: [],
  page: 1,
  totalPages: 0,
  totalItems: 0,
  limit: 10,
  search: "",
};

function RnFlatList(props) {
  const [data, setData] = useState({ ...INITIAL_DATA });
  const [isReady, setIsReady] = useState(false);
  const [flatListRef, setFlatListRef] = useState(null);

  console.log("data :>> ", {
    page: data.page,
    limit: data.limit,
    totalItems: data.totalItems,
    totalPages: data.totalPages,
  });

  const _getData = (page = 1, limit = 10, search = "") => {
    setIsReady(false);
    console.log("getData");
    const res = getData(page, limit, search);
    // console.log("res :>> ", res);
    if (res.success) {
      setTimeout(() => {
        setData({ ...res.payload });
        setIsReady(true);
      }, 1000);
    } else {
      setData({ ...INITIAL_DATA });
    }
  };

  useEffect(() => {
    _getData();
  }, []);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        Styles.container,
        Styles.block,
        Styles.blockCenterItems,
        Styles.padding,
        Styles.marginBottom,
        Styles.marginHorizontal,
        { height: 100 },
      ]}
    >
      <Text>
        {index} - {item.title}
      </Text>
    </View>
  );

  const _onEndReached = () => {
    if (data.limit < data.totalItems) {
      console.log("_onEndReached");
      _getData(1, data.limit + 10, data.search);
    }
  };

  const _scrollToEnd = () => {
    if (flatListRef) {
      console.log("_scrollToEnd");
      flatListRef.scrollToEnd({ animated: true });
    }
  };

  const _scrollToIndex = (index) => {
    if (flatListRef && index >= 0 && index < data.data.length) {
      console.log("_scrollToIndex");
      flatListRef.scrollToIndex({ animated: true, index });
    }
  };

  return (
    <View style={Styles.container}>
      <Button title="scrollToEnd" onPress={_scrollToEnd} />
      <Button title="scrollToIndex 0" onPress={() => _scrollToIndex(0)} />
      <FlatList
        data={data.data}
        keyExtractor={(item) => `${item._id}`}
        ref={setFlatListRef}
        renderItem={renderItem}
        // ItemSeparatorComponent={() => (
        //   <View style={{ height: 10, backgroundColor: "red" }} />
        // )}
        // ListEmptyComponent={() => (
        //   <Text style={Styles.dataResult}>Data empty</Text>
        // )}
        ListFooterComponent={() =>
          isReady && data.data.length === data.totalItems ? (
            <Text>{data.totalItems} results</Text>
          ) : (
            <ActivityIndicator color={Colors.primary} />
          )
        }
        ListFooterComponentStyle={[
          Styles.paddingVertical,
          Styles.blockCenterItems,
        ]}
        // ListHeaderComponent={() => <Text>List header</Text>}
        ListHeaderComponentStyle={[
          Styles.paddingVertical,
          Styles.blockCenterItems,
        ]}
        // numColumns={2}
        // columnWrapperStyle={{ flexWrap: "wrap" }}
        // horizontal
        // inverted
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default RnFlatList;
