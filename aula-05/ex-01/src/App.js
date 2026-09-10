import { SafeAreaView } from 'react-native-safe-area-context';
import { CardProducts } from './components/CardProducts';
// import da biblioteca safe-area-view

// import do componente CardProducts

export default function App() {
  return (
    <SafeAreaView>
      <CardProducts />
    </SafeAreaView>
  );
}
