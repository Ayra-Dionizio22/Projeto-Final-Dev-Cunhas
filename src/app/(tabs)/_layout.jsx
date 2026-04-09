
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { ImageUp, Eclipse, Sun, SunMoon } from 'lucide-react-native';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';


function TabsDrawerContent(props) {
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <View style={style.container}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          width={64}
          height={64}
          style={style.avatar}
        />
        <View style={style.temaContainer}>
          <ImageUp style={{ color: "#6C63FF", marginTop: 10 }} />
          <TouchableOpacity style={style.button}>
            <Text style={style.texto}>Editar foto</Text>
          </TouchableOpacity>
        </View>

        <View style={style.temaContainer}>
          <Eclipse style={{ color: "#6C63FF", marginTop: 10 }} />
          <TouchableOpacity style={style.buttonMode}>
            <Sun style={{ color: "#6C63FF" }} />
            <Text style={style.texto}>Claro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonMode}>
            <SunMoon style={{ color: "#6C63FF" }} />
            <Text style={style.texto}>Claro</Text>
          </TouchableOpacity>

        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default function TabsDrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <TabsDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(main)"
        options={{
          title: '',
          headerShown: true,
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },

  avatar: {
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 30
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#6C63FF",
    paddingHorizontal: 85,
    paddingVertical: 10,
    marginBottom: 10,
  },

  temaContainer: {
    flexDirection: "row",
    gap: 8,
  },

  buttonMode: {
    alignItems: "center",
    gap: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#6C63FF",
    paddingHorizontal: 45,
    paddingVertical: 5,
    marginBottom: 10,
  },

  texto: {
    fontSize: 18,
    color: "#6C63FF"
  },
})
