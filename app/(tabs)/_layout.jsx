import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'; 

const _layout = () => {
  return (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen
        name="index"
        options={{
            title: "home",
            tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
        }}/>

    <Tabs.Screen
    name="settings"
    options={{
        title: "settings", 
        tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>
    }}
    />
  </Tabs>
  )
}

export default _layout