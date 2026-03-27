/**
 * Author
 * Mohit Kumar
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent withoutDep />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// colors
const GRADIENT = ['#222795', '#0E7E3D']

function AppContent({ withoutDep = false }: { withoutDep: Boolean }) {

  if (withoutDep) {
    return (
      <View
        style={[styles.experimentalGradient, styles.gradient]}
      >
        <Text style={styles.txt}>{'This gradient is without any dep'}</Text>
      </View>
    )
  }

  return (
    <LinearGradient
      colors={GRADIENT}
      start={{ x: 0.3, y: 1 }}
      end={{ x: 1, y: 0.3 }}
      style={styles.gradient}
    >
      <Text style={styles.txt}>{'This is a simple gradient'}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradient: { height: '5%', justifyContent: 'center' },
  txt: { color: 'white', fontSize: 20 },
  experimentalGradient: {
    experimental_backgroundImage: `linear-gradient(135deg,${GRADIENT.join(', ')})`//try more styles as per your use cases
  }
});

export default App;
