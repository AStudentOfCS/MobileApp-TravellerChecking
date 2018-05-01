import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import CustomButton from "../../components/UI/Button/Button";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <CustomButton color="#29aaf4">Switch to Login</CustomButton>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your email address"
              style={styles.input}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPW
                  : styles.landscapePW
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPWidth
                    : styles.landscapePWidth
                }
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPWidth
                    : styles.landscapePWidth
                }
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <CustomButton color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </CustomButton>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  landscapePW: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landscapePWidth: {
    width: "45%"
  },
  portraitPW: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  portraitPWidth: {
    width: "100%"
  }
});

export default AuthScreen;
