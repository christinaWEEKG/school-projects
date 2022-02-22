import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

function AddToComment(props) {
  const [toComment, setToComment] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <View style={{backgroundColor:'#000', width:'100%'}}>
      <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "bold", color:'white' }}>
        Add comments :
      </Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',color:'black' }}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Comments pls...."
        value={toComment}
        onChangeText={function (value) {
          setToComment(value);
          setError("");
        }}
      />
     
        <Button color="transparent" 
          onPress={function () {
            if (!toComment) {
              // return setError("Nothing to Add?");
              return Alert.alert('Nothing to Add? 🤔 ')
            }
            props.onAddToComment(toComment);
            Alert.alert('Added!! 🙏 ')
            setToComment("")
          }}
          title="➕"
        />
        </View>
      {error ? <Text style={{ color: "red"}}>{error}</Text> : <></>} 
    </View>
  );
}

function arrayItemCounter(arr) {
  const counter = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!counter[item]) counter[item] = 0;
    counter[item] += 1;
  }
  return counter;
}

function ToCommentList(props) {
  const tocommentsCount = arrayItemCounter(props.tocomments);
  return (
    <View>
      {props.tocomments.map(function (tocomment, index) {
        const isAppearMoreThanOnce = tocommentsCount[tocomment] > 1;
        return isAppearMoreThanOnce ? (
          <Text key={index} style={{ color: "red" }}>
            {tocomment}
          </Text>
        ) : (
          <Text key={index}>{tocomment}</Text>
        );
      })}
    </View>
  );
}

export default function AddReview() {
  const [tocomments, setTocomments] = React.useState([]);
  return (
    <View style={styles.container}>
      <AddToComment
        onAddToComment={function (tocomment) {
          setTocomments([...tocomments, tocomment]);
        }}
      />
      <ToCommentList tocomments={tocomments} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    margin: 5,
    width: 250,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
});
