export interface List {
  title: string;
  value: string;
}

export type BarChart = {
  name: string;
  data: [number, number] | number[];
};

export interface Content {
  title: string;
  value?: number;
  prev?: string;
  current?: string;
  items?: List[] | BarChart[];
}

// export interface Configuration {
//   type: WidgetType;
//   postion: WidgetPosition;
//   template: WidgetTemplate;
// }

export interface Configuration {
  type: any;
  position: any;
  template: any;
}

export interface Widget {
  config: Configuration;
  data: Content;
}

export interface WidgetComponentProps {
  content: Widget;
}
export interface WidgetTemplateConfig {
  [template: string]: React.FC<WidgetComponentProps>;
}
