import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'

export default function FruitCardCart({fruit}) {
  return (
    <View className="flex-row justify-between items-center space-x-5 mb-4">
        <View className="ml-5">
            <TouchableOpacity className="flex-row justify-center -mb-10 -ml-10 shadow-lg z-20" >
            <Image source={fruit.image} style={{height: 65,width: 65,  shadowColor: fruit.shadow,
                overflow: 'visible',
                shadowRadius: 15,
                shadowOffset: {width: 0, height: 20},
                shadowOpacity: 0.4,
                }} />
            </TouchableOpacity>
            
            <View 
                style={{backgroundColor: fruit.color(0.4), height: 60, width: 60}} 
                className={` rounded-3xl flex justify-end items-center`}>
            </View>
        </View>
        <View className="flex-1 space-y-1">
            <Text style={{color: themeColors.text}} className=" text-base font-bold">{fruit.name}</Text>
            <Text className="text-yellow-500 font-extrabold">$ {fruit.price}</Text>
        </View>
        <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                <PlusIcon size="15" color="white"/>
            </TouchableOpacity>
            <Text>{fruit.qty}</Text>
            <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                <MinusIcon size="15" color="white"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}