import shallowRender from "react-test-renderer/shallow";
import OkSearchResult from "../../../src/activity/journey/journey-activity/search-journey/search-results/ok-search-result/OkSearchResult";

const renderer = shallowRender.createRenderer();

test("renders correctly", async () =>
    expect(renderer.render(OkSearchResult({ journeys: [], displayFee: false, passangersCount: 1 })))
        .toMatchInlineSnapshot(`
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
  `));
