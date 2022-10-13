import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const App = () => {
  const carouselElement = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Image
        source={{uri: 'https://picsum.photos/id/684/600/400'}}
        style={{width: '100%', height: 200}}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rebeccapurple'}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={carouselElement}
          data={carouselItems}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 1}
          renderItem={renderItem}
          pagingEnabled={true}
          onSnapToItem={index => setActiveIndex(index)}></Carousel>
      </View>
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
};

export default App;
