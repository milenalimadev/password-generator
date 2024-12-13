import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#0e0e0e",
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#f0c808",
        headerStyle: {
          backgroundColor: "#35cdce"
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#FFF",
          fontWeight: "bold"
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Gerador",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"lock-reset"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen  
        name="history"
        options={{
          title: "Histórico",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"history"} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  )
}
