import { Tabs } from "expo-router";

export function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="generator"
        options={{
          title: "Gerador"
        }}
      />
      <Tabs.Screen 
        name="history"
        options={{
          title: "Histórico"
        }}
      />
    </Tabs>
  )
}
