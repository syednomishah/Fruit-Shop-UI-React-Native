import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
export default function ProductScreen(props) {
    let fruit = props.route.params;
    const navigation = useNavigation();
    console.log('fruit: ',fruit);
  return (
    <View className="flex-1" style={{backgroundColor: fruit.color}}>
        <SafeAreaView>
            <View className="flex-row justify-start mx-5">
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="border border-gray-50 rounded-xl">
                    <ChevronLeftIcon size="30" color="white" />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center mt-5 pb-10" style={{
                shadowColor: fruit.shadow,
                shadowRadius: 50,
                shadowOffset: {width: 0, height: 50},
                shadowOpacity: 0.7,
            }}>
                <Image source={fruit.image} style={{width: 290, height: 290}} />
            </View>
        </SafeAreaView>
        <View 
            style={{borderTopLeftRadius: 45, borderTopRightRadius: 45}} 
            className="bg-orange-50 flex-1 px-6 space-y-2">
           <Text style={{color: themeColors.text}} className="mt-8 text-2xl font-bold">{fruit.name}</Text>
           <View className="flex-row justify-between mb-3">
            <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
            <Text className="text-gray-500 font-semibold">
                Sold <Text className="text-gray-800 font-extrabold"> 239</Text>
            </Text>
           </View>

            <StarRating
                disabled={true}
                starSize={18}
                containerStyle={{width: 120}}
                maxStars={5}
                rating={fruit.stars}
                emptyStarColor="lightgray"
                // emptyStar={require('../assets/images/emptyStar.png')}
                fullStar={require('../assets/images/fullStar.png')}
            />
            <View style={{height: 165}}>
                <Text style={{color: themeColors.text}} className="tracking-wider py-3 ">
                Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a bad galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic wisa typesetting.
                </Text>
            </View>
            
            <View className="flex-row justify-between items-center">
                <Text className="text-3xl">$ {fruit.price}</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Cart')} 
                style={{
                    backgroundColor: fruit.shadow, 
                    opacity: 0.6,
                    shadowColor: fruit.shadow,
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 15},
                    shadowOpacity: 0.5,
                }} className="p-3 ml-6 flex-1 rounded-xl">
                    <Text className="text-xl text-center text-white font-bold">Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
    
  )
}