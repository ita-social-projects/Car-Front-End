import React from "react";
import shallowRender from "react-test-renderer/shallow";
import PhoneNumberInput from "../../src/components/phonenumber-input-button/PhoneNumberInput";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
  expect(
    renderer.render(
      <PhoneNumberInput
        number={""}
        onChangeText={() => {}}
        onClearPress={() => {}}
        isVisible={true}
      />
    )
  ).toMatchInlineSnapshot(`
    <View>
      <Component
        allowFontScaling={true}
        editable={true}
        keyboardType="number-pad"
        multiline={false}
        onBlur={[Function]}
        onChangeText={[Function]}
        onFocus={[Function]}
        placeholder="Phone number"
        placeholderTextColor="#C4C4C4"
        rejectResponderTermination={true}
        style={
          Array [
            Object {
              "borderWidth": 2,
              "fontSize": 18,
              "paddingLeft": 15,
            },
            Object {
              "borderColor": "#C4C4C4",
              "borderWidth": 1,
              "color": "#C4C4C4",
            },
          ]
        }
        underlineColorAndroid="transparent"
        value=""
      />
      <View />
      <View />
    </View>
  `));
