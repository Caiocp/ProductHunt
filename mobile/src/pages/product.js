import React from "react";
import { WebView } from "react-native-webview";

export default function Product({ route, navigation }) {
  const { product } = route.params;

  navigation.setOptions({ title: product.title });

  return <WebView source={{ uri: product.url }} />;
}
