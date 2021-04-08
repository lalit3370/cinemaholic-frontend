import axios from "axios";
import React from "react";
export default function DisplayData() {
    const [JsonData, setJsonData] = useState({});
    abc();
    function abc() {
        axios
            .get("http://192.168.1.23:3000/home")
            .then(function (response) {
                console.log(response.data);
                // setJsonData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })
            .then(function () {
                console.log(`fetch completed at ${Date()}`);
            });
    }
    return <Text style={{ color: "white" }}>{`called api at ${Date()}`}</Text>;
}
