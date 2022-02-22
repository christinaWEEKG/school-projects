import { Text, View, Image } from "react-native";
import { useParams } from "react-router-native";
import { ScrollView } from "react-native-gesture-handler";
import AddReview from "./addReview";

const data = require("./data.json");

export default function MovieDetails(props) {
  const { id } = useParams();

  const item = data[id];
  return (
    <ScrollView>
      <View style={{ paddingBottom: 100 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ borderRadius: 6, height: 130, width: "100%" }}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
        </View>

        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
            {item.title}
          </Text>
          <Text style={{fontSize: 13,textAlign: "center", paddingBottom: 20}}>
            {item.review}
          </Text>
        </View>
            <View style={{display: "flex",flexDirection: "row",justifyContent: "center", alignItems: "center"}}></View>
                <AddReview />
        </View>
    </ScrollView>
  );
}
