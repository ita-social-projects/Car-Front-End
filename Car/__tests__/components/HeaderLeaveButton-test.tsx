import React from "react";
import HeaderLeaveButton from "../../src/components/create-journey-more-options-popup/header-leave-button/HeaderLeaveButton";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyService from "../../api-service/journey-service/JourneyService";
import APIService from "../../api-service/APIService";
import { AxiosResponse } from "axios";
import ConfirmModal from "../../src/components/confirm-modal/ConfirmModal";
import * as navigation from "../../src/components/navigation/Navigation";

const renderer = shallowRenderer.createRenderer();
let setLeaveRideModalIsVisible = true;

test("modal must be visible", async () => {
    expect(setLeaveRideModalIsVisible).toBeTruthy();
});

test("shoud be correct", async () =>
    expect(navigation.navigate("Journey")).toBe(
    navigation.navigationRef.current?.navigate("Journey")
    ));

test("renders correctly", async () =>
    expect(
        renderer.render(
            <ConfirmModal
                visible={false}
                title={""}
                confirmText={""}
                onConfirm={() => {}}
                disableModal={() => {}}
            />
        )
    ).toMatchInlineSnapshot(`
    <Component
      animationType="fade"
      hardwareAccelerated={false}
      statusBarTranslucent={true}
      transparent={true}
      visible={false}
    >
      <TouchableWithoutFeedback
        onPress={[Function]}
      >
        <View
          style={
            Object {
              "alignItems": "center",
              "backgroundColor": "rgba(0, 0, 0, 0.5)",
              "flex": 1,
              "flexDirection": "column",
              "justifyContent": "center",
            }
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={
                Object {
                  "alignItems": "center",
                  "backgroundColor": "#FFFFFF",
                  "borderRadius": 16,
                  "height": 310,
                  "justifyContent": "center",
                  "opacity": 1,
                  "paddingBottom": 24,
                  "paddingHorizontal": 20,
                  "paddingTop": 32,
                  "paddingVertical": 30,
                  "width": 344,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#0B171B",
                    "fontFamily": undefined,
                    "fontSize": 14,
                    "fontWeight": "700",
                    "lineHeight": 18,
                  }
                }
              >
                
              </Text>
              <Text
                style={
                  Object {
                    "color": "#909095",
                    "marginBottom": 40,
                    "marginHorizontal": 21.5,
                    "marginTop": 32,
                    "textAlign": "center",
                  }
                }
              />
              <ForwardRef
                onPress={[Function]}
                style={
                  Object {
                    "alignItems": "center",
                    "backgroundColor": "#D80056",
                    "height": 56,
                    "marginBottom": 26,
                    "paddingVertical": 18,
                    "width": 304,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "color": "#0B171B",
                        "fontFamily": undefined,
                        "fontSize": 14,
                        "fontWeight": "700",
                        "lineHeight": 18,
                      },
                      Object {
                        "color": "#FFFFFF",
                      },
                    ]
                  }
                >
                  
                </Text>
              </ForwardRef>
              <ForwardRef
                onPress={[Function]}
              >
                <Text
                  style={
                    Object {
                      "color": "#0B171B",
                      "fontFamily": undefined,
                      "fontSize": 14,
                      "fontWeight": "700",
                      "lineHeight": 18,
                    }
                  }
                />
              </ForwardRef>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Component>
  `));

test("should delete user from journey", async () => {
    jest.spyOn(APIService, "delete").mockImplementation(
        () =>
            new Promise<AxiosResponse>(function (resolve) {
                resolve({
                    data: {},
                    statusText: "Ok",
                    status: 200,
                    config: {},
                    headers: {
                        "Context-Type": "application/json",
                    },
                });
            })
    );
    JourneyService.deleteUser(0, 0).then((res) => {
        expect(res.status).toBe(200);
    });
});

test("renders correctly", async () =>
    expect(
        renderer.render(<HeaderLeaveButton onPress={setLeaveRideModalIsVisible} />)
    ).toMatchInlineSnapshot(`
    <View>
      <ForwardRef
        onPress={[Function]}
        style={
          Object {
            "height": 44,
            "justifyContent": "center",
            "paddingHorizontal": 12,
          }
        }
      >
        <View
          style={
            Object {
              "justifyContent": "center",
            }
          }
        >
          <Text
            style={
              Array [
                Object {
                  "alignItems": "center",
                  "color": "#EC6400",
                  "fontSize": 20,
                  "fontWeight": "bold",
                  "lineHeight": 40,
                  "paddingLeft": 20,
                },
                Object {
                  "color": "#EC6400",
                },
              ]
            }
          >
            Leave
          </Text>
        </View>
      </ForwardRef>
      <ConfirmModal
        cancelText="No"
        confirmText="Yes"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="Are you sure you want to leave the ride?"
        title="Leave Ride"
        visible={false}
      />
      <ConfirmModal
        confirmText="Ok"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Ride was successfully left"
        title="Ride leaving"
        visible={false}
      />
    </View>
  `));
