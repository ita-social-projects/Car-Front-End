                        example to invoke component BadgePopup
 BadgePopup.show({
                    isShowing: true,
                    ThemeColorPrimary: colors.primary,
                    ThemeColorWhite: colors.white,
                    ThemeColorDark: colors.secondaryDark,
                    callback: () => {BadgePopup.hide();},
                    close: () => {BadgePopup.close();}
                });