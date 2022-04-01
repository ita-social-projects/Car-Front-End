import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import PhoneNumber from "../../../src/activity/my-profile/my-profile-activity/details/phonenumber/PhoneNumber";

const renderer = shallowRenderer.createRenderer();

const navigation = {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  addListener: (event: string, callback: () => void) => () => void {},
};

test("renders correctly", async () =>
  expect(renderer.render(<PhoneNumber navigation={navigation} />))
    .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "padding": 16,
          },
        ]
      }
    >
      <AvatarLogoTitle />
      <View
        style={
          Object {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "paddingTop": 16,
          }
        }
      >
        <ChooseOption
          onValueChanged={[Function]}
          text="Do you agree to show your phone number to other registered users to contact you?"
        />
      </View>
      <View
        style={
          Object {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "paddingTop": 16,
          }
        }
      >
        <PhoneNumberInput
          number=""
          onChangeText={[Function]}
          onClearPress={[Function]}
        />
      </View>
    </View>
  `));
