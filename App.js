import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [words, setWords] = useState([null, "First", "Second", "Third"]);
  const [wordIndex, setWordIndex] = useState(1);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0 && wordIndex < words.length) {
      setCounter(10);
      setWordIndex(wordIndex + 1);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}> 
      {wordIndex < words.length && 
        <>
          <Text>Word {wordIndex}: {words[wordIndex]}</Text>
          <Text>Time left: {counter}</Text>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});