export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--theme-color": "black",
    "--theme-text-color": "white",
    "--background-color":"white",
    "--background-input-color":"linear-gradient(180deg,hsla(0,0%,100%,0) 13.94%,#fff 54.73%)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--theme-color": "white",
    "--theme-text-color": "black",
    "--background-color":"#343541",
    "--background-input-color":"linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%)"
  }
};

