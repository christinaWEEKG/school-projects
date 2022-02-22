import * as React from "react";
import {Text,View,StyleSheet,Image,FlatList, Pressable} from "react-native";
import { Linking } from "react-native-web";
import {Link} from "react-router-native";


const data = require("./data.json")

function MovieItem(data) {
    return (
        <View style={styles.movieItem}>
            
            <View style={{ flex: 1, height: "100%" }}> 
                <Image
                    source={{ uri: data.image }}
                    resizeMode="contain"
                    style={{ flex: 1, height: 110, width: 110 }}
                    />
            </View>
            <View style={{ flex: 3, display: "flex" }}>
                <Text style=
                    {{paddingLeft: 50, justifyContent: "center", flexWrap: "wrap", fontWeight: "bold",
                    }}> {data.title}
                </Text>
            </View>
            <View style={{ flex: 1, display: "flex" }}>
                <Link to={`/item/${data.index}`}>
                    <Text style={{ textAlign: "center" }}> 👁 🎥 </Text>
                </Link>
            </View>
        </View>
    );
}
  
export default function Home(props) {
    return (
        <FlatList
            data={data}
            renderItem={(p) => {
                const item = p.item;
                const index = p.index;
                return (
                    <MovieItem
                        image={item.image}
                        title={item.title}
                        index={index}
                        keyExtractor={(item) => item.id}
                    />
                );
            }}
        />
    );
}
    const styles = StyleSheet.create({
        movieItem: {
            display: "flex",
            flexDirection: "row",
            height: 90,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 4.65,
            elevation: 3,
            marginTop:0,
        },
    });
    
  