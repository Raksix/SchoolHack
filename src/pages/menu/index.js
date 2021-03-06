import React, { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { MenuContext } from "../../contexts/menuContext";
import { MenuStyles } from "./style";


export default function MenuIndex() {

   const [menu, setMenu] = useContext(MenuContext)

   return (
      <ScrollView>
         <View style={MenuStyles.menu}>
            <Text>ğ</Text>
            <Pressable style={MenuStyles.MenuSelector} onPress={() => {
               setMenu("eba")
            }}>
               <Text style={MenuStyles.MenuText}>Boş</Text>
            </Pressable>
            <Pressable style={MenuStyles.MenuSelector} onPress={() => {
               setMenu("eba")
            }}>
               <Text style={MenuStyles.MenuText}>Eba</Text>
            </Pressable>
            <Pressable style={MenuStyles.MenuSelector} onPress={() => {
               setMenu("quiz")
            }}>
               <Text style={MenuStyles.MenuText}>Quizizz</Text>
            </Pressable>
            <Pressable style={MenuStyles.MenuSelector} onPress={() => {
               setMenu("kahoot")
            }}>
               <Text style={MenuStyles.MenuText}>Kahoot</Text>
            </Pressable>
         </View>
      </ScrollView>
   )
}