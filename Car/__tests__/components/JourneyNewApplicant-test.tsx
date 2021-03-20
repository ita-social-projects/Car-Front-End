import React from "react";
import shallowRender from "react-test-renderer/shallow";
import JourneyNewApplicant from "../../src/components/journey-new-applicant/JourneyNewApplicant";

const renderer = shallowRender.createRenderer();

test("renders correctly", () =>
    expect(
        renderer.render(
            <JourneyNewApplicant
                user={{ name: "Abc", surname: "Abc", position: "Abc" }}
                notificationData={`{"title": "New Applicant", "comments": "${"Abc"}", "hasLuggage": "${true}"}`}
            />
        )
    ).toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        onPress={[Function]}
      >
        <NewNotification
          notificationTitle="New Applicant"
          user={
            Object {
              "name": "Abc",
              "position": "Abc",
              "surname": "Abc",
            }
          }
        />
      </ForwardRef>
      <Component
        animationType="fade"
        hardwareAccelerated={false}
        transparent={true}
        visible={true}
      >
        <View>
          <View>
            <View>
              <View>
                <Text>
                  New Applicant
                </Text>
              </View>
              <View>
                <ForwardRef
                  onPress={[Function]}
                >
                  <Text>
                    Snooze
                  </Text>
                </ForwardRef>
              </View>
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                ]
              }
            >
              <AvatarLogo
                size={49}
                user={
                  Object {
                    "name": "Abc",
                    "position": "Abc",
                    "surname": "Abc",
                  }
                }
              />
              <View>
                <View>
                  <Text>
                    Abc Abc
                  </Text>
                  <Text>
                    Abc
                  </Text>
                  <Text>
                    123 rides, 2 badges
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                ]
              }
            >
              <Text>
                Abc
              </Text>
              <View />
            </View>
            <View
              style={
                Array [
                  undefined,
                  undefined,
                ]
              }
            >
              <Text>
                I’m Traveling with a baggage.
              </Text>
              <View />
            </View>
            <View
              style={
                Array [
                  undefined,
                ]
              }
            >
              <Text>
                Abc
                ’s stop in your Journey
              </Text>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.3rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="1rem"
                    />
                  </Circle>
                  <View />
                </View>
                <View>
                  <Text>
                    Location A
                  </Text>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.5rem"
                    radius="0.75rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="0.35rem"
                    />
                  </Circle>
                  <View />
                </View>
                <View>
                  <Text>
                    Stop A.1
                  </Text>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.1rem"
                  >
                    <LinearGradient
                      colors={
                        Array [
                          "#00A3CF",
                          "#5552A0",
                        ]
                      }
                      end={
                        Object {
                          "x": 1,
                          "y": 1,
                        }
                      }
                      start={
                        Object {
                          "x": 0,
                          "y": 0,
                        }
                      }
                    />
                  </Circle>
                  <View />
                </View>
                <View>
                  <RNVirtualLinearTextGradient
                    colors={
                      Array [
                        "#00A3CF",
                        "#5552A0",
                      ]
                    }
                    end={
                      Object {
                        "x": 1,
                        "y": 0,
                      }
                    }
                    locations={
                      Array [
                        0,
                        1,
                      ]
                    }
                    start={
                      Object {
                        "x": 0,
                        "y": 0,
                      }
                    }
                  >
                    <Text>
                      Abc
                      's stop A.2 ‏
                    </Text>
                    <Text
                      style={
                        Object {
                          "fontFamily": "Open Sans",
                        }
                      }
                    >
                      (view on the map)
                    </Text>
                  </RNVirtualLinearTextGradient>
                </View>
              </View>
              <View
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <View>
                  <Circle
                    base={true}
                    color="#FFFFFF"
                    marginTop="0.3rem"
                    radius="1.3rem"
                  >
                    <Circle
                      color="#C1C1C5"
                      radius="1rem"
                    />
                  </Circle>
                </View>
                <View>
                  <Text>
                    Location B (Your stop)
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <Text>
                  Accept
                </Text>
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
                style={
                  Array [
                    undefined,
                    undefined,
                  ]
                }
              >
                <Text>
                  Decline
                </Text>
              </ForwardRef>
            </View>
          </View>
        </View>
      </Component>
    </View>
  `));
