import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import style from './style';
import photo from './assets/photo.jpg';
import Card from './components/Card';

const App = () => {
  const handleSocialNetworkClick = social_network => {
    switch (social_network) {
      case 'linkedin':
        Linking.openURL(
          'https://www.linkedin.com/in/pedro-anast%C3%A1cio-69559a222/',
        );
        break;
      case 'github':
        Linking.openURL('https://github.com/pedroanastacio');
        break;
    }
  };

  return (
    <SafeAreaView style={style.page}>
      <View style={style.header_container}>
        <Image source={photo} style={style.photo} />
        <Text style={style.name}>PEDRO ANASTÁCIO</Text>
        <Text style={style.expertise}>Desenvolvedor FullStack JS</Text>
        <View style={style.social_networks}>
          <TouchableOpacity
            onPress={() => {
              handleSocialNetworkClick('github');
            }}>
            <Icon name="github" size={30} style={style.social_networks_icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleSocialNetworkClick('linkedin');
            }}>
            <Icon
              name="linkedin"
              size={30}
              style={style.social_networks_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Card title="Experiência profissional">
        <Text style={style.card_context_text}>
          Prefeitura Municipal de Patos de Minas
        </Text>
      </Card>
      <Card title="Formação acadêmica">
        <Text style={style.card_context_text}>
          Bacharelem Sistemas de Informação - Centro Universitário de Patos de
          Minas (UNIPAM)
        </Text>
        <Text style={style.card_context_text}>
          Técnico em Eletrotécnica - SENAI
        </Text>
      </Card>
    </SafeAreaView>
  );
};

export default App;
