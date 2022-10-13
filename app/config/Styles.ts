const PRIMARY_COLOR = "#013C51";
const SECONDARY_COLOR = "#01B1B8";
const SUCCESSFUL_COLOR = "#00D472";
const DANGER_COLOR = "#F2555D";
const PRIMARY_GRADIENT_COLOR = "#01B1B8";
const DARK = "#000000";
const LIGHT = "#FAFAFA";

const PRIMARY_COLOR_DARK = "#CFD5F6";
const PRIMARY_COLOR_LIGHT = "#F1F4FF";
const RED = "#E74C3C";
const RED_LIGHT = "#fbb";
const RED_LIGHT_2 = "#FCEAE8";
const LIGHT_BLUE = "#F1F4FF";
const LINE_COLOR = "#B69CFF";
const ORANGE = "#f3771c";
const ORANGE_LIGHT = "#FC9951";
const HERO_LINE = "#2AE2EE";
const GREEN = "#0f8800"
const LIGHT_GREEN = "#d1ffcc";
const ALERT_RED_LIGHT = "#f5c6cb";
const ALERT_RED = "#721c24";
const ALERT_GREEN = "#155724";
const ALERT_GREEN_LIGHT = "#c3e6cb";
const ALERT_ORANGE = "#ff9f0b";
const ALERT_ORANGE_LIGHT = "#ffd493"
const YELLOW = "#F1C40F";
const YELLOW_LIGHT = "#FEF9E7";
const YELLOW_LIGHT_DARK = "#fbefc0";
const GRAY = "#737373";
const LIGHT_GRAY = "#9d9d9d"
const NOTIFICATION_LIGHT = "#d86c9a";



export const ConfigStyles = {
    LIGHT: LIGHT,
    DARK: DARK,
    PRIMARY_COLOR: PRIMARY_COLOR,
    SECONDARY_COLOR: SECONDARY_COLOR,
    SUCCESSFUL_COLOR: SUCCESSFUL_COLOR,
    DANGER_COLOR: DANGER_COLOR,
    PRIMARY_GRADIENT_COLOR: PRIMARY_GRADIENT_COLOR,
    LoginScreen: {
        IconSection: {
            flex: 3.2,
            alignItems: "center",
            justifyContent: "center"
        },
        IconText:{
            color: LIGHT,
            marginTop: 20,
            fontSize: 15,
            fontFamily:"Cairo-Regular"
        },
        HeadingSection:{
            flex:0.3,
            alignItems:"center",
            justifyContent:"center",
        },
        HeadingText:{
            color: LIGHT,
            fontSize: 20,
            fontFamily:"Cairo-SemiBold"
        },
        InputSection:{
            flex:2,
            alignItems:"center",
            justifyContent:"space-evenly"
        },
        Input:{
            height: 50,
            backgroundColor: PRIMARY_COLOR,
            borderRadius: 20,
            width: '75%',
            padding: 10,
            color: LIGHT,
            fontSize: 17,
            fontFamily:"Cairo-SemiBold"
        },
        LoginBTN:{
            height: 50,
            backgroundColor: PRIMARY_COLOR,
            borderRadius: 20,
            width: '40%',
            justifyContent: "center",
        },
        LoginText:{
            color: LIGHT,
            fontSize: 17,
            textAlign: "center",
            fontFamily:"Cairo-SemiBold"
        },
        FooterSection:{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20
        },
        VersionSection:{
            flexDirection: "row",
            alignItems: "center"
        },
        VersionText:{
            color: LIGHT,
            marginRight: 10,
            fontSize: 17,
            fontFamily:"Cairo-SemiBold"
        },
        ForgotText:{
            color: LIGHT,
            fontSize: 17,
            fontFamily:"Cairo-SemiBold"
        },
        PasswordSection:{
            flexDirection:"row",
            width:'75%',
            backgroundColor:PRIMARY_COLOR,
            borderRadius:20,
            justifyContent:"flex-start",
            alignItems:"center"
        }
    }
}