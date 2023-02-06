import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [words, setWords] = useState([null, "First", "Second", "Third"]);
  const [wordIndex, setWordIndex] = useState(1);
  const [counter, setCounter] = useState(3);
  const [test, setTest] = useState(false);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0 && wordIndex < (words.length - 1)) {
      setCounter(3);
      setWordIndex(wordIndex + 1);
    }
    if (counter === 0 && wordIndex === (words.length - 1)) {
      setTest(true);
    }
    return () => {
      clearInterval(timer);
    }
  }, [counter]);

  return (
    <View style={styles.container}> 
      {!test ?
        <>
          <Text>Word {wordIndex}: {words[wordIndex]}</Text>
          <Text>Time left: {counter}</Text>
        </>
      :
        <Text>No time left</Text>
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