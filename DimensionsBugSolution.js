import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Width: {windowDimensions.width}</Text>
      <Text>Height: {windowDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;