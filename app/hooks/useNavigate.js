const useNavigation = ({ screenName, navigation, ...otherOptions }) =>
  navigation.navigate(screenName, { ...otherOptions });

export { useNavigation };
 