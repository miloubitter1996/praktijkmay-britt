import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import nl from "vuetify/es5/locale/nl";

Vue.use(Vuetify);
import scssvars from "@/style/_variables.scss";

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: scssvars.primary,
        secondary: scssvars.secondary,
        accent: scssvars.accent,
        accentLight: scssvars.accentLight,
        textAccentColor: scssvars.textAccentColor,
        textColor: scssvars.textColor,
        white: scssvars.whiteColor,
        error: scssvars.error,
        info: scssvars.info,
        success: scssvars.success,
        warning: scssvars.warning,
        background: scssvars.backgroundColor,
        menu: scssvars.menuColor,
        disabled: scssvars.disabledColor,
      },
    },
  },
  lang: {
    locales: { nl },
    current: "nl",
  },
  icons: {
    iconfont: "mdi",
  },
});
