/**
 * 心智障碍者工作现场支持应用
 * 包含工作流程拆解和沟通辅助功能
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MainScreen from './src/screens/MainScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      <MainScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
