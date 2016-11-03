import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

const week = [
  {title: '星期一', weather: '\uf013', max: '9', min: '6'},
  {title: '星期二', weather: '\uf013', max: '9', min: '6'},
  {title: '星期三', weather: '\uf013', max: '19', min: '6'},
  {title: '星期四', weather: '\uf013', max: '19', min: '16'},
  {title: '星期五', weather: '\uf013', max: '9', min: '6'},
  {title: '星期六', weather: '\uf013', max: '9', min: '6'},
  {title: '星期日', weather: '\uf013', max: '9', min: '6'},
];

export default class HomePage extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={{fontSize: 16, marginTop: 10, color: 'white'}}>南京</Text>
          <Text style={styles.weatherIcon}>
            {'\uf013'}
          </Text>
          <Text style={{fontSize: 35, color: 'white'}}>35°</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {week.map((item, index) => {
            return (
              <View key={index} style={styles.weekCell}>
                <Text style={{color: 'white'}}>{item.title}</Text>
                <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 20, marginVertical: 8}}>
                  {'\uf013'}
                </Text>
                <Text style={{color: 'white'}}>{item.max}° / {item.min}°</Text>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.detailCell}>
              <View style={styles.airCell}>
                <Text style={{color: 'white', fontSize: 30}}>
                  良
                </Text>
              </View>

              <Text style={styles.detailText}>
                AQI：50
              </Text>
              <Text style={styles.detailText}>
                PM2.5：50
              </Text>
            </View>
            <View style={styles.detailCell}>
              <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 60}}>
                {'\uf0bc'}
              </Text>
              <Text style={styles.detailText}>
                风向：南
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.detailCell}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 20, marginRight: 10}}>
                  {'\uf04e'}
                </Text>
                <Text style={styles.detailText}>
                  降雨概率：20%
                </Text>
              </View>


              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 20, marginRight: 10}}>
                  {'\uf07a'}
                </Text>
                <Text style={styles.detailText}>
                  湿度：70%
                </Text>
              </View>

            </View>
            <View style={styles.detailCell}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 20, marginRight: 10}}>
                  {'\uf051'}
                </Text>
                <Text style={styles.detailText}>
                  日出：上午6:22
                </Text>
              </View>


              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontFamily: 'WeatherIcons-Regular', color: 'white', fontSize: 20, marginRight: 10}}>
                  {'\uf052'}
                </Text>
                <Text style={styles.detailText}>
                  日落：下午7:22
                </Text>
              </View>
            </View>
          </View>
        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#589BC7',
  },
  header: {
    alignItems: 'center',
    padding: 15,
  },
  weatherIcon: {
    fontFamily: 'WeatherIcons-Regular',
    fontSize: 80,
    color: 'white',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  weekCell: {
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  detailCell: {
    flex: 1,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    color: 'white',
    fontSize: 16,
  },
  airCell: {
    // backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
