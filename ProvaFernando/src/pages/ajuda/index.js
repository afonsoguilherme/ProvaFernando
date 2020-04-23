import React, {useState, useEffect} from 'react';
import HtmlText from 'react-native-html-to-text';

import {View, ScrollView} from 'react-native';

import Styles from './styles';

function Ajuda() {
  const mensagem =
    '<p><b>BEM VINDO!</b></p>' +
    '<p>Este aplicativo permite que você gerêncie seus imovéis.</p>' +
    '<p>O aplicativo possui as seguintes funções: cadastro, edição, exclusão e busca.</p>';

  return (
    <View style={Styles.container}>
      <ScrollView>
        <HtmlText style={Styles.text} html={mensagem} />
      </ScrollView>
    </View>
  );
}

export default Ajuda;
