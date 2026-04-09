import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Settings() {
  return (
    <View style={styleSettings.container}>
      <View style={styleSettings.profile}>
        <Image
          source={require("../../../../assets/images/togepi.png")}
          width={64}
          height={64}
          style={styleSettings.avatar}
        />
        <Text style={styleSettings.nome}>Angela Ayra</Text>
      </View>

      <View style={styleSettings.options}>
        <TouchableOpacity style={styleSettings.button}>
          <AntDesign name="edit" size={24} color="white" style={{paddingLeft: 10}}/>
          <Text style={styleSettings.buttonText}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettings.button}>
          <Ionicons name="notifications" size={24} color="white" style={{paddingLeft: 10}}/>
          <Text style={styleSettings.buttonText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettings.button}>
          <Octicons name="download" size={24} color="white" style={{paddingLeft: 10}}/>
          <Text style={styleSettings.buttonText}>Downloads</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettings.button}>
          <FontAwesome6 name="list" size={24} color="white" style={{paddingLeft: 10}}/>
          <Text style={styleSettings.buttonText}>Minha lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleSettings.button}>
          <MaterialCommunityIcons name="exit-to-app" size={24} color="white" style={{paddingLeft: 10}}/>
          <Text style={styleSettings.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSettings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    paddingTop: 50
  },

  profile: {
    alignItems: "center",
    marginBottom: 30
  },
  
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  nome: {
    fontSize: 20,
    color: "white",
    fontWeight: "600"
  },

  options: {
    paddingTop: 30,
    paddingHorizontal: 20,
    gap: 12,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 13,
    borderRadius: 5,
    backgroundColor: "#3c3a41",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})