import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './routes/drawer'
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { default as mapping } from './mapping.json'; // <-- Import app mapping
import { default as theme } from './theme.json'; // <-- Import app mapping

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
//  console.log(theme);
const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);
// console.log(eva);
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider 
    {...eva} 
    // customMapping={mapping} 
    theme={{...eva.light,...theme}}>
      <Navigator />
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
