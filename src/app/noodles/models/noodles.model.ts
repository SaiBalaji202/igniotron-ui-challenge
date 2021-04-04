export interface NoodleResp {
  Brand: string;
  Variety: string;
  Style: string;
  Country: string;
  Stars: number;
  'Top Ten': string;
}

export interface NoodleImgResp {
  Image: string;
}

export interface Noodle extends NoodleResp, NoodleImgResp {}
