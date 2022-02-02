import React from "react";
import shallowRender from "react-test-renderer/shallow";
import OkSearchResult from "../../../src/activity/journey/journey-activity/search-journey/search-results/ok-search-result/OkSearchResult";
import OkSearchResultProps from "../../../src/activity/journey/journey-activity/search-journey/search-results/ok-search-result/OkSearchResultProps";

const renderer = shallowRender.createRenderer();

const props: OkSearchResultProps = {
    route: {
        params: {
            journeys: [],
            displayFee: false,
            passangersCount: 1,
            isPast: false,
            isCanceled: false
        },
    },
};

test("renders correctly", async () =>
    expect(renderer.render(<OkSearchResult {...props} />)).toMatchInlineSnapshot(`
    <React.Fragment>
      <View
        style={
          Array [
            Object {
              "flex": 1,
            },
            Object {
              "backgroundColor": "#FFFFFF",
            },
          ]
        }
      >
        <FlatList
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={
            Object {
              "height": 37,
            }
          }
          data={Array []}
          disableVirtualization={false}
          horizontal={false}
          initialNumToRender={10}
          keyExtractor={[Function]}
          maxToRenderPerBatch={10}
          numColumns={1}
          onEndReachedThreshold={2}
          removeClippedSubviews={false}
          renderItem={[Function]}
          scrollEventThrottle={50}
          style={
            Object {
              "paddingHorizontal": 16,
            }
          }
          updateCellsBatchingPeriod={50}
          windowSize={21}
        />
      </View>
      <ConfirmModal
        cancelText="No, go back"
        confirmText="Yes, create"
        disableModal={[Function]}
        onConfirm={[Function]}
        subtitle="You're about to create a ride request with new filters."
        title="ARE YOU SURE?"
        visible={false}
      />
      <ConfirmModal
        confirmText="OK"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Unexpected error occured :("
        title="Error"
        visible={false}
      />
      <ConfirmModal
        confirmText="OK"
        disableModal={[Function]}
        hideCancelButton={true}
        onConfirm={[Function]}
        subtitle="Your Ride Request is created!"
        title="Ride Request"
        visible={false}
      />
      <ShadowedBottomPopup
        enabledInnerScrolling={false}
        initialSnap={0}
        renderContent={
          <View
            style={
              Array [
                Object {
                  "height": 240,
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                },
              ]
            }
          >
            <MenuButton
              isIcon={true}
              onPress={[Function]}
              text="With the previous filters"
            />
            <MenuButton
              isIcon={true}
              onPress={[Function]}
              text="With new filters"
            />
          </View>
        }
        renderHeader={
          <View
            style={
              Array [
                Object {
                  "paddingBottom": 20,
                  "paddingLeft": 24,
                },
                Object {
                  "backgroundColor": "#FFFFFF",
                },
              ]
            }
          >
            <Text
              style={
                Array [
                  Object {
                    "alignItems": "center",
                    "fontSize": 14,
                    "fontWeight": "bold",
                    "letterSpacing": 0.2,
                    "lineHeight": 16,
                    "textTransform": "uppercase",
                  },
                  Object {
                    "color": "#0B171B",
                  },
                ]
              }
            >
              REQUEST A RIDE
            </Text>
          </View>
        }
        snapPoints={
          Array [
            0,
            195,
          ]
        }
      />
    </React.Fragment>
  `));
