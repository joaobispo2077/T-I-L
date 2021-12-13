import { WidgetPosition, WidgetTemplate, WidgetType } from "./dashboard.config";

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

export interface Configuration {
  type: WidgetType;
  position: WidgetPosition;
  template: WidgetTemplate;
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
