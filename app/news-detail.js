import { Heading, Text, Center, Image, View } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
        <View>
          <Image
            width={"auto"}
            height={200}
            source={{ uri: params.image }}
            alt="Image Data"
            role="Image"
            marginBottom={15}
          />
          <Text fontSize={"$sm"} paddingHorizontal={15} marginBottom={9} color="black">{params.date}</Text>
          <Heading lineHeight={"$xl"} fontSize={24} paddingHorizontal={15}>{params.title}</Heading>
          <View
            p={7}
            width={380}
            marginBottom={10}
            alignSelf="center"
            borderBottomColor={"$coolGray300"}
            paddingHorizontal={15}
            borderBottomWidth={1}
          ></View>
          <Text paddingHorizontal={15} color="black" marginBottom={10}>{params.content}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
