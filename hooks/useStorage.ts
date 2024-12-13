import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key: string = "@pass") => {
    try {
      const items = await AsyncStorage.getItem(key)
      let passwords = items ? JSON.parse(items) : []
      if (passwords === null) AsyncStorage.setItem(key, JSON.stringify([]));
      return passwords
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }

  const saveItem = async (key: string = "@pass", value: string) => {
    try {
      let items = await getItem(key)
      items.push(value)
      await AsyncStorage.setItem(key, JSON.stringify(items))
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }

  const removeItem = async (key: string = "@pass", value: string) => {
    try {
      let items = await getItem(key)
      const newItems = items.filter((item: string) => item !== value)
      await AsyncStorage.setItem(key, JSON.stringify(newItems))
      return newItems
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }

  return {
    getItem,
    saveItem,
    removeItem
  }
}

export default useStorage
