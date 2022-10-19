import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    marginTop: 24,
  },
  label: {
    marginTop: 6,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: '#ff7675',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 3,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: '#01395e',
  },
  signInButton: {
    borderRadius: 3,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 24,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#0666A7',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
