import React from "react";
import renderer from "react-test-renderer";
import MyProfile from "../../../src/activity/my-profile/MyProfile";

test("renders correctly", async () =>
    expect(renderer.create(<MyProfile navigation={undefined} />).toJSON())
        .toMatchInlineSnapshot(`
    <View
      style={
        Array [
          Object {
            "alignSelf": "stretch",
            "flex": 1,
          },
          Object {
            "backgroundColor": "#FFFFFF",
          },
        ]
      }
    >
      <View
        style={
          Array [
            Object {
              "borderBottomWidth": 2,
              "height": 57,
              "width": "100%",
            },
            Object {
              "borderColor": "#F8F8F8",
            },
          ]
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontSize": 16,
                "fontWeight": "bold",
                "paddingTop": 16,
                "textAlign": "center",
              },
              Object {
                "color": "#0B171B",
              },
            ]
          }
        >
          My Profile
        </Text>
      </View>
      <RCTScrollView>
        <View>
          <View
            style={
              Array [
                Object {
                  "flex": 1,
                  "paddingHorizontal": 16,
                  "paddingVertical": 16,
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                },
              ]
            }
          >
            <View
              pointerEvents="box-none"
            >
              <View
                pointerEvents="none"
                style={
                  Array [
                    Object {
                      "bottom": 0,
                      "left": 0,
                      "position": "absolute",
                      "right": 0,
                      "top": 3,
                    },
                    undefined,
                  ]
                }
              >
                <RNSVGSvgView
                  bbHeight="100%"
                  bbWidth={9}
                  focusable={false}
                  height="100%"
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": -8,
                        "position": "absolute",
                        "top": 16,
                      },
                      Object {
                        "flex": 0,
                        "height": "100%",
                        "width": 9,
                      },
                    ]
                  }
                  width={9}
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGLinearGradient
                        gradient={
                          Array [
                            0,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={0}
                        name="left"
                        x1="1"
                        x2="0"
                        y1="0"
                        y2="0"
                      />
                    </RNSVGDefs>
                    <RNSVGRect
                      fill={
                        Array [
                          1,
                          "left",
                        ]
                      }
                      height="100%"
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                      width={8}
                      x={0}
                      y={-32}
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight="100%"
                  bbWidth={9}
                  focusable={false}
                  height="100%"
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": "100%",
                        "position": "absolute",
                        "top": 16,
                      },
                      Object {
                        "flex": 0,
                        "height": "100%",
                        "width": 9,
                      },
                    ]
                  }
                  width={9}
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGLinearGradient
                        gradient={
                          Array [
                            0,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={0}
                        name="right"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      />
                    </RNSVGDefs>
                    <RNSVGRect
                      fill={
                        Array [
                          1,
                          "right",
                        ]
                      }
                      height="100%"
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                      width={8}
                      x={0}
                      y={-32}
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={9}
                  bbWidth="100%"
                  focusable={false}
                  height={9}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": 16,
                        "position": "absolute",
                        "top": "100%",
                      },
                      Object {
                        "flex": 0,
                        "height": 9,
                        "width": "100%",
                      },
                    ]
                  }
                  width="100%"
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGLinearGradient
                        gradient={
                          Array [
                            0,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={0}
                        name="bottom"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      />
                    </RNSVGDefs>
                    <RNSVGRect
                      fill={
                        Array [
                          1,
                          "bottom",
                        ]
                      }
                      height={8}
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                      width="100%"
                      x={-32}
                      y={0}
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={9}
                  bbWidth="100%"
                  focusable={false}
                  height={9}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": 16,
                        "position": "absolute",
                        "top": -8,
                      },
                      Object {
                        "flex": 0,
                        "height": 9,
                        "width": "100%",
                      },
                    ]
                  }
                  width="100%"
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGLinearGradient
                        gradient={
                          Array [
                            0,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={0}
                        name="top"
                        x1="0"
                        x2="0"
                        y1="1"
                        y2="0"
                      />
                    </RNSVGDefs>
                    <RNSVGRect
                      fill={
                        Array [
                          1,
                          "top",
                        ]
                      }
                      height={8}
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                      width="100%"
                      x={-32}
                      y={0}
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={25}
                  bbWidth={25}
                  focusable={false}
                  height={25}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": -8,
                        "position": "absolute",
                        "top": -8,
                      },
                      Object {
                        "flex": 0,
                        "height": 25,
                        "width": 25,
                      },
                    ]
                  }
                  width={25}
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGRadialGradient
                        cx={24}
                        cy={24}
                        fx={24}
                        fy={24}
                        gradient={
                          Array [
                            0.6666666666666666,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={1}
                        name="topLeft"
                        rx={24}
                        ry={24}
                      />
                    </RNSVGDefs>
                    <RNSVGPath
                      d="M0,24 a24,24 0 0 1 24 -24 v8 v16 h-16 h-8 Z"
                      fill={
                        Array [
                          1,
                          "topLeft",
                        ]
                      }
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={25}
                  bbWidth={25}
                  focusable={false}
                  height={25}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": "100%",
                        "position": "absolute",
                        "top": -8,
                        "transform": Array [
                          Object {
                            "translateX": -16,
                          },
                        ],
                      },
                      Object {
                        "flex": 0,
                        "height": 25,
                        "width": 25,
                      },
                    ]
                  }
                  width={25}
                >
                  <RNSVGGroup
                    matrix={
                      Array [
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                      ]
                    }
                  >
                    <RNSVGDefs>
                      <RNSVGRadialGradient
                        cx={0}
                        cy={24}
                        fx={0}
                        fy={24}
                        gradient={
                          Array [
                            0.6666666666666666,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={1}
                        name="topRight"
                        rx={24}
                        ry={24}
                      />
                    </RNSVGDefs>
                    <RNSVGPath
                      d="M0,0 a24,24 0 0 1 24,24 h-8 h-16 v-16 v-8 Z"
                      fill={
                        Array [
                          1,
                          "topRight",
                        ]
                      }
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={25}
                  bbWidth={25}
                  focusable={false}
                  height={25}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": -8,
                        "position": "absolute",
                        "top": "100%",
                        "transform": Array [
                          Object {
                            "translateY": -16,
                          },
                        ],
                      },
                      Object {
                        "flex": 0,
                        "height": 25,
                        "width": 25,
                      },
                    ]
                  }
                  width={25}
                >
                  <RNSVGGroup
                    matrix={
                      Array [
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                      ]
                    }
                  >
                    <RNSVGDefs>
                      <RNSVGRadialGradient
                        cx={24}
                        cy={0}
                        fx={24}
                        fy={0}
                        gradient={
                          Array [
                            0.6666666666666666,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={1}
                        name="bottomLeft"
                        rx={24}
                        ry={24}
                      />
                    </RNSVGDefs>
                    <RNSVGPath
                      d="M24,24 a24,24 0 0 1 -24,-24 h8 h16 v16 v8 Z"
                      fill={
                        Array [
                          1,
                          "bottomLeft",
                        ]
                      }
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight={25}
                  bbWidth={25}
                  focusable={false}
                  height={25}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "left": "100%",
                        "position": "absolute",
                        "top": "100%",
                        "transform": Array [
                          Object {
                            "translateX": -16,
                          },
                          Object {
                            "translateY": -16,
                          },
                        ],
                      },
                      Object {
                        "flex": 0,
                        "height": 25,
                        "width": 25,
                      },
                    ]
                  }
                  width={25}
                >
                  <RNSVGGroup
                    matrix={
                      Array [
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                      ]
                    }
                  >
                    <RNSVGDefs>
                      <RNSVGRadialGradient
                        cx={0}
                        cy={0}
                        fx={0}
                        fy={0}
                        gradient={
                          Array [
                            0.6666666666666666,
                            -1710619,
                            1,
                            15066597,
                          ]
                        }
                        gradientTransform={null}
                        gradientUnits={1}
                        name="bottomRight"
                        rx={24}
                        ry={24}
                      />
                    </RNSVGDefs>
                    <RNSVGPath
                      d="M24,0 a24,24 0 0 1 -24,24 v-8 v-16 h16 h8 Z"
                      fill={
                        Array [
                          1,
                          "bottomRight",
                        ]
                      }
                      propList={
                        Array [
                          "fill",
                        ]
                      }
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
                <RNSVGSvgView
                  bbHeight="100%"
                  bbWidth="100%"
                  focusable={false}
                  height="100%"
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "borderWidth": 0,
                      },
                      Object {
                        "position": "absolute",
                      },
                      Object {
                        "flex": 0,
                        "height": "100%",
                        "width": "100%",
                      },
                    ]
                  }
                  width="100%"
                >
                  <RNSVGGroup>
                    <RNSVGDefs>
                      <RNSVGMask
                        height="100%"
                        maskContentUnits={1}
                        maskTransform={
                          Array [
                            1,
                            0,
                            0,
                            1,
                            0,
                            0,
                          ]
                        }
                        maskUnits={0}
                        name="maskPaintBelow"
                        width="100%"
                        x="0%"
                        y="0%"
                      >
                        <RNSVGRect
                          fill={4294967295}
                          height="100%"
                          propList={
                            Array [
                              "fill",
                            ]
                          }
                          width="100%"
                          x={0}
                          y={0}
                        />
                        <RNSVGRect
                          fill={4278190080}
                          height={16}
                          propList={
                            Array [
                              "fill",
                            ]
                          }
                          width={16}
                          x={0}
                          y={0}
                        />
                        <RNSVGRect
                          fill={4278190080}
                          height={16}
                          matrix={
                            Array [
                              1,
                              0,
                              0,
                              1,
                              -16,
                              0,
                            ]
                          }
                          propList={
                            Array [
                              "fill",
                            ]
                          }
                          width={16}
                          x="100%"
                          y={0}
                        />
                        <RNSVGRect
                          fill={4278190080}
                          height={16}
                          matrix={
                            Array [
                              1,
                              0,
                              0,
                              1,
                              0,
                              -16,
                            ]
                          }
                          propList={
                            Array [
                              "fill",
                            ]
                          }
                          width={16}
                          x={0}
                          y="100%"
                        />
                        <RNSVGRect
                          fill={4278190080}
                          height={16}
                          matrix={
                            Array [
                              1,
                              0,
                              0,
                              1,
                              -16,
                              -16,
                            ]
                          }
                          propList={
                            Array [
                              "fill",
                            ]
                          }
                          width={16}
                          x="100%"
                          y="100%"
                        />
                      </RNSVGMask>
                    </RNSVGDefs>
                    <RNSVGRect
                      fill={4293256677}
                      fillOpacity={1}
                      height="100%"
                      mask="maskPaintBelow"
                      propList={
                        Array [
                          "fill",
                          "fillOpacity",
                        ]
                      }
                      width="100%"
                      x={0}
                      y={0}
                    />
                  </RNSVGGroup>
                </RNSVGSvgView>
              </View>
              <View
                onLayout={[Function]}
                pointerEvents="box-none"
                style={
                  Array [
                    Object {
                      "alignSelf": "flex-start",
                    },
                    undefined,
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    Array [
                      Object {
                        "borderRadius": 16,
                        "borderWidth": 1,
                        "minHeight": 48,
                        "paddingHorizontal": 26,
                        "paddingVertical": 24,
                        "width": 718,
                      },
                      Object {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#F8F8F8",
                      },
                    ]
                  }
                >
                  <RCTScrollView
                    collapsable={false}
                    onGestureHandlerEvent={[Function]}
                    onGestureHandlerStateChange={[Function]}
                  >
                    <View>
                      <View
                        style={
                          Object {
                            "alignItems": "center",
                            "flex": 1,
                            "flexDirection": "row",
                            "minHeight": 98,
                          }
                        }
                      >
                        <View
                          style={
                            Array [
                              Object {
                                "alignItems": "center",
                                "borderRadius": 1000,
                                "justifyContent": "center",
                              },
                              Object {
                                "backgroundColor": "#0B171B",
                                "height": 56,
                                "marginLeft": undefined,
                                "marginTop": 0,
                                "width": 56,
                              },
                            ]
                          }
                        >
                          <Text
                            style={
                              Array [
                                Object {
                                  "fontFamily": "Open Sans Bold",
                                  "fontWeight": "700",
                                  "textTransform": "uppercase",
                                },
                                Object {
                                  "color": "#FFFFFF",
                                  "fontSize": 22.4,
                                  "lineHeight": 22.4,
                                  "paddingTop": 4,
                                },
                              ]
                            }
                          >
                            
                          </Text>
                        </View>
                        <View
                          style={
                            Object {
                              "marginLeft": 20,
                            }
                          }
                        >
                          <Text
                            style={
                              Array [
                                Object {
                                  "fontSize": 18,
                                  "fontWeight": "bold",
                                  "lineHeight": 22,
                                  "marginBottom": 4,
                                },
                                Object {
                                  "color": "#0B171B",
                                },
                              ]
                            }
                          >
                            undefined undefined
                          </Text>
                          <Text
                            style={
                              Array [
                                Object {
                                  "color": "rgba(0, 163, 207, 1)",
                                  "fontSize": 14,
                                  "lineHeight": 18,
                                  "marginBottom": 4,
                                },
                                Object {
                                  "color": "#414045",
                                  "fontWeight": "bold",
                                },
                              ]
                            }
                          />
                          <Text
                            style={
                              Array [
                                Object {
                                  "fontSize": 14,
                                  "lineHeight": 18,
                                  "marginBottom": 4,
                                },
                                Object {
                                  "color": "#909095",
                                },
                              ]
                            }
                          />
                          <Text
                            style={
                              Array [
                                Object {
                                  "fontSize": 13,
                                  "lineHeight": 18,
                                },
                                Object {
                                  "color": "#909095",
                                },
                              ]
                            }
                          >
                            undefined rides as driver
                          </Text>
                          <Text
                            style={
                              Array [
                                Object {
                                  "fontSize": 13,
                                  "lineHeight": 18,
                                },
                                Object {
                                  "color": "#909095",
                                },
                              ]
                            }
                          >
                            undefined rides as passanger
                          </Text>
                        </View>
                      </View>
                    </View>
                  </RCTScrollView>
                </View>
              </View>
            </View>
            <View
              style={
                Object {
                  "alignItems": "center",
                  "paddingBottom": 16,
                  "paddingTop": 28,
                }
              }
            >
              <View
                style={
                  Object {
                    "flexDirection": "row",
                  }
                }
              >
                <View
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "backgroundColor": "#0B171B",
                      "borderColor": "#0B171B",
                      "borderWidth": 1,
                      "color": "#FFFFFF",
                      "flexDirection": "row",
                      "height": 32,
                      "justifyContent": "center",
                      "opacity": 1,
                      "width": 82,
                    }
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Milliard",
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "letterSpacing": 0.25,
                          "lineHeight": 20,
                          "textAlign": "center",
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#0B171B",
                          "borderColor": "#0B171B",
                          "color": "#FFFFFF",
                        },
                      ]
                    }
                  >
                    Light
                  </Text>
                </View>
                <View
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 1,
                      "borderColor": "#0B171B",
                      "borderRightWidth": 1,
                      "borderTopWidth": 1,
                      "color": "#0B171B",
                      "flexDirection": "row",
                      "height": 32,
                      "justifyContent": "center",
                      "opacity": 1,
                      "width": 80,
                    }
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Milliard",
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "letterSpacing": 0.25,
                          "lineHeight": 20,
                          "textAlign": "center",
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#FFFFFF",
                          "borderColor": "#0B171B",
                          "color": "#0B171B",
                        },
                      ]
                    }
                  >
                    Dark
                  </Text>
                </View>
                <View
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
                  style={
                    Object {
                      "alignItems": "center",
                      "backgroundColor": "#FFFFFF",
                      "borderBottomWidth": 1,
                      "borderColor": "#0B171B",
                      "borderRightWidth": 1,
                      "borderTopWidth": 1,
                      "color": "#0B171B",
                      "flexDirection": "row",
                      "height": 32,
                      "justifyContent": "center",
                      "opacity": 1,
                      "width": 125,
                    }
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Milliard",
                          "fontSize": 16,
                          "fontWeight": "bold",
                          "letterSpacing": 0.25,
                          "lineHeight": 20,
                          "textAlign": "center",
                          "textTransform": "uppercase",
                        },
                        Object {
                          "backgroundColor": "#FFFFFF",
                          "borderColor": "#0B171B",
                          "color": "#0B171B",
                        },
                      ]
                    }
                  >
                    As system
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                accessible={true}
                focusable={true}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "borderBottomColor": "#AAA9AE",
                    "opacity": 1,
                  }
                }
              >
                <View>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                      }
                    }
                  >
                    <View>
                      <Image
                        source={
                          Object {
                            "testUri": "../../../assets/images/icons/my-profile/lightBadges.png",
                          }
                        }
                        style={
                          Object {
                            "borderRadius": 0,
                            "height": 22.5,
                            "resizeMode": "contain",
                            "width": 22.5,
                          }
                        }
                      />
                    </View>
                    <View>
                      <Text
                        style={
                          Array [
                            Object {
                              "fontWeight": "bold",
                            },
                            Object {
                              "color": "#0B171B",
                            },
                          ]
                        }
                      >
                        Badges
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    allowFontScaling={false}
                    style={
                      Array [
                        Object {
                          "color": "#414045",
                          "fontSize": 20,
                        },
                        undefined,
                        Object {
                          "fontFamily": "Ionicons",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                        },
                        Object {},
                      ]
                    }
                  >
                    
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                accessible={true}
                focusable={true}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "borderBottomColor": "#AAA9AE",
                    "opacity": 1,
                  }
                }
              >
                <View>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                      }
                    }
                  >
                    <View>
                      <Image
                        source={
                          Object {
                            "testUri": "../../../assets/images/icons/my-profile/lightPreferences.png",
                          }
                        }
                        style={
                          Object {
                            "borderRadius": 0,
                            "height": 22.5,
                            "resizeMode": "contain",
                            "width": 22.5,
                          }
                        }
                      />
                    </View>
                    <View>
                      <Text
                        style={
                          Array [
                            Object {
                              "fontWeight": "bold",
                            },
                            Object {
                              "color": "#0B171B",
                            },
                          ]
                        }
                      >
                        Preferences
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    allowFontScaling={false}
                    style={
                      Array [
                        Object {
                          "color": "#414045",
                          "fontSize": 20,
                        },
                        undefined,
                        Object {
                          "fontFamily": "Ionicons",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                        },
                        Object {},
                      ]
                    }
                  >
                    
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                accessible={true}
                focusable={true}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "borderBottomColor": "#AAA9AE",
                    "opacity": 1,
                  }
                }
              >
                <View>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                      }
                    }
                  >
                    <View>
                      <Image
                        source={
                          Object {
                            "testUri": "../../../assets/images/icons/my-profile/lightCars.png",
                          }
                        }
                        style={
                          Object {
                            "borderRadius": 0,
                            "height": 22.5,
                            "resizeMode": "contain",
                            "width": 22.5,
                          }
                        }
                      />
                    </View>
                    <View>
                      <Text
                        style={
                          Array [
                            Object {
                              "fontWeight": "bold",
                            },
                            Object {
                              "color": "#0B171B",
                            },
                          ]
                        }
                      >
                        My Cars
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    allowFontScaling={false}
                    style={
                      Array [
                        Object {
                          "color": "#414045",
                          "fontSize": 20,
                        },
                        undefined,
                        Object {
                          "fontFamily": "Ionicons",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                        },
                        Object {},
                      ]
                    }
                  >
                    
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                accessible={true}
                focusable={true}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "borderBottomColor": "#AAA9AE",
                    "opacity": 1,
                  }
                }
              >
                <View>
                  <View
                    style={
                      Object {
                        "flexDirection": "row",
                      }
                    }
                  >
                    <View>
                      <Image
                        source={
                          Object {
                            "testUri": "../../../assets/images/icons/my-profile/lightAddress.png",
                          }
                        }
                        style={
                          Object {
                            "borderRadius": 0,
                            "height": 22.5,
                            "resizeMode": "contain",
                            "width": 22.5,
                          }
                        }
                      />
                    </View>
                    <View>
                      <Text
                        style={
                          Array [
                            Object {
                              "fontWeight": "bold",
                            },
                            Object {
                              "color": "#0B171B",
                            },
                          ]
                        }
                      >
                        Address Book
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    allowFontScaling={false}
                    style={
                      Array [
                        Object {
                          "color": "#414045",
                          "fontSize": 20,
                        },
                        undefined,
                        Object {
                          "fontFamily": "Ionicons",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                        },
                        Object {},
                      ]
                    }
                  >
                    
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={
                Object {
                  "paddingTop": 21,
                }
              }
            >
              <View
                accessible={true}
                focusable={true}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "alignItems": "center",
                    "justifyContent": "center",
                    "opacity": 1,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans ExtraBold",
                        "fontSize": 16,
                        "fontStyle": "normal",
                        "fontWeight": "bold",
                        "letterSpacing": 0.25,
                        "width": 62,
                      },
                      Object {
                        "color": "#EC6400",
                      },
                    ]
                  }
                >
                  Log out
                </Text>
              </View>
              <Modal
                animationType="fade"
                hardwareAccelerated={false}
                statusBarTranslucent={true}
                transparent={true}
                visible={false}
              >
                <View
                  accessible={true}
                  focusable={true}
                  onClick={[Function]}
                  onResponderGrant={[Function]}
                  onResponderMove={[Function]}
                  onResponderRelease={[Function]}
                  onResponderTerminate={[Function]}
                  onResponderTerminationRequest={[Function]}
                  onStartShouldSetResponder={[Function]}
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
                  <View
                    accessible={true}
                    focusable={false}
                    onClick={[Function]}
                    onResponderGrant={[Function]}
                    onResponderMove={[Function]}
                    onResponderRelease={[Function]}
                    onResponderTerminate={[Function]}
                    onResponderTerminationRequest={[Function]}
                    onStartShouldSetResponder={[Function]}
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
                      ARE YOU SURE?
                    </Text>
                    <Text
                      style={
                        Object {
                          "color": "#909095",
                          "fontSize": 16,
                          "marginBottom": 40,
                          "marginHorizontal": 21.5,
                          "marginTop": 32,
                          "textAlign": "center",
                        }
                      }
                    >
                      You are about to log out from the App
                    </Text>
                    <View
                      accessible={true}
                      focusable={true}
                      onClick={[Function]}
                      onResponderGrant={[Function]}
                      onResponderMove={[Function]}
                      onResponderRelease={[Function]}
                      onResponderTerminate={[Function]}
                      onResponderTerminationRequest={[Function]}
                      onStartShouldSetResponder={[Function]}
                      style={
                        Object {
                          "alignItems": "center",
                          "backgroundColor": "#D80056",
                          "height": 56,
                          "marginBottom": 26,
                          "opacity": 1,
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
                        Yes, log out
                      </Text>
                    </View>
                    <View
                      accessible={true}
                      focusable={true}
                      onClick={[Function]}
                      onResponderGrant={[Function]}
                      onResponderMove={[Function]}
                      onResponderRelease={[Function]}
                      onResponderTerminate={[Function]}
                      onResponderTerminationRequest={[Function]}
                      onStartShouldSetResponder={[Function]}
                      style={
                        Object {
                          "opacity": 1,
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
                        No, stay
                      </Text>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View
              style={
                Object {
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "paddingBottom": 19,
                  "paddingTop": 40,
                }
              }
            >
              <View
                accessible={true}
                focusable={false}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "opacity": 1,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": undefined,
                        "fontSize": 13,
                        "fontWeight": "normal",
                        "lineHeight": 18,
                        "paddingRight": 16,
                      },
                      Object {
                        "color": "#909095",
                      },
                    ]
                  }
                >
                  Privacy Policy
                </Text>
              </View>
              <View>
                <Text
                  style={
                    Object {
                      "color": "#909095",
                    }
                  }
                >
                  •
                </Text>
              </View>
              <View
                accessible={true}
                focusable={false}
                onClick={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Object {
                    "opacity": 1,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": undefined,
                        "fontSize": 13,
                        "fontWeight": "normal",
                        "lineHeight": 18,
                        "paddingLeft": 16,
                        "paddingRight": 16,
                      },
                      Object {
                        "color": "#909095",
                      },
                    ]
                  }
                >
                  Terms of Service
                </Text>
              </View>
            </View>
          </View>
        </View>
      </RCTScrollView>
    </View>
  `));
